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
$BuildSrcDir = Join-Path $BuildDir "src"

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
    $relative = [System.IO.Path]::GetRelativePath($ProjectRoot, $TemplatePath)
    $target = Join-Path $BuildDir $relative
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

function Invoke-Build {
    Ensure-Directory -Path $BuildDir

    $sourceFiles = Get-ChildItem -Path $SourceDir -File -Recurse
    foreach ($file in $sourceFiles) {
        Invoke-Tera -TemplatePath $file.FullName
    }

    if (Test-Path -LiteralPath $PublicDir) {
        Ensure-Directory -Path $BuildSrcDir
        $publicItemCount = (Get-ChildItem -Path $PublicDir -Force | Measure-Object).Count
        if ($publicItemCount -gt 0) {
            Copy-Item -Path (Join-Path $PublicDir '*') -Destination $BuildSrcDir -Recurse -Force -Container
        }
    }

    Write-Host "Build complete -> $BuildDir"
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
