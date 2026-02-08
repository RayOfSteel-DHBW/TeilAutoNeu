[CmdletBinding()]
param(
    [ValidateSet("build", "clean", "watch")]
    [string]$Task = "build"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $PSScriptRoot
$SourceDir = Join-Path $ProjectRoot "src"
$TemplateDir = Join-Path $ProjectRoot "templates"
$PublicDir = Join-Path $ProjectRoot "public"
$BuildDir = Join-Path $ProjectRoot "build"
$BuildOutputDir = Join-Path $BuildDir "dist"
$TailwindInput = Join-Path $SourceDir "tailwind.css"
$TailwindOutput = Join-Path $BuildOutputDir "tailwind.css"

if (-not (Test-Path -LiteralPath $SourceDir)) {
    throw "Source directory not found: $SourceDir"
}

function Ensure-Directory {
    param([string]$Path)
    if (-not (Test-Path -LiteralPath $Path)) {
        New-Item -ItemType Directory -Path $Path | Out-Null
    }
}

function Invoke-Clean {
    if (Test-Path -LiteralPath $BuildDir) {
        Remove-Item -Path $BuildDir -Recurse -Force
        Write-Host "Removed $BuildDir"
    }
}

function Invoke-Tera {
    param([string]$TemplatePath)
    $relative = [System.IO.Path]::GetRelativePath($SourceDir, $TemplatePath)
    $target = Join-Path $BuildOutputDir $relative
    $targetDir = Split-Path -Parent $target
    Ensure-Directory -Path $targetDir

    $arguments = @(
        "--include-path", $TemplateDir,
        "--env-only",
        "--template", $TemplatePath,
        "-o", $target
    )

    & tera @arguments
    if ($LASTEXITCODE -ne 0) {
        throw "tera exited with code $LASTEXITCODE for $TemplatePath"
    }
}

function Invoke-Tailwind {
    if (-not (Test-Path -LiteralPath $TailwindInput)) {
        throw "Tailwind input not found: $TailwindInput"
    }

    Push-Location $ProjectRoot
    try {
        $arguments = @(
            "@tailwindcss/cli",
            "-i", $TailwindInput,
            "-o", $TailwindOutput
        )

        & npx @arguments
        if ($LASTEXITCODE -ne 0) {
            throw "tailwindcss exited with code $LASTEXITCODE"
        }
    }
    finally {
        Pop-Location
    }
}

function Invoke-Build {
    Ensure-Directory -Path $BuildDir
    Ensure-Directory -Path $BuildOutputDir

    $sourceFiles = Get-ChildItem -Path $SourceDir -File -Recurse
    foreach ($file in $sourceFiles) {
        Invoke-Tera -TemplatePath $file.FullName
    }

    Invoke-Tailwind

    if (Test-Path -LiteralPath $PublicDir) {
        Ensure-Directory -Path $BuildOutputDir
        $publicItems = Get-ChildItem -Path $PublicDir -Force
        if ($publicItems.Count -gt 0) {
            foreach ($item in $publicItems) {
                $destination = Join-Path $BuildOutputDir $item.Name
                Copy-Item -LiteralPath $item.FullName -Destination $destination -Recurse -Force
            }
        }
    }

    Write-Host "Build complete -> $BuildOutputDir"
}

function Start-Watch {
    Write-Host "Watching src, templates, public (Ctrl+C to stop)..."
    $global:rebuildRequested = $true

    $targets = @($SourceDir, $TemplateDir, $PublicDir) | Where-Object { Test-Path $_ }
    $watchers = @()
    $subscriptions = @()

    foreach ($target in $targets) {
        $watcher = [System.IO.FileSystemWatcher]::new($target)
        $watcher.IncludeSubdirectories = $true
        $watcher.EnableRaisingEvents = $true
        $watchers += $watcher

        foreach ($eventName in @("Changed", "Created", "Deleted", "Renamed")) {
            $subscriptions += Register-ObjectEvent -InputObject $watcher -EventName $eventName -Action {
                Set-Variable -Name rebuildRequested -Scope Global -Value $true
            }
        }
    }

    try {
        while ($true) {
            Start-Sleep -Milliseconds 250
            if ($global:rebuildRequested) {
                $global:rebuildRequested = $false
                Invoke-Build
            }
        }
    }
    finally {
        foreach ($subscription in $subscriptions) {
            Unregister-Event -SubscriptionId $subscription.Id
        }
        foreach ($watcher in $watchers) {
            $watcher.Dispose()
        }
        Remove-Variable -Name rebuildRequested -Scope Global -ErrorAction SilentlyContinue
    }
}

switch ($Task) {
    "clean" {
        Invoke-Clean
    }
    "build" {
        Invoke-Clean
        Invoke-Build
    }
    "watch" {
        Invoke-Clean
        Start-Watch
    }
    default {
        throw "Unsupported task $Task"
    }
}
