const headers = document.querySelectorAll(".accordion-header");

if (headers.length > 0) {
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const isOpen = header.getAttribute("aria-expanded") === "true";

      headers.forEach((other) => {
        if (other === header) {
          return;
        }

        other.setAttribute("aria-expanded", "false");
        other.classList.remove("is-open");

        const otherContentId = other.getAttribute("aria-controls");
        const otherContent = otherContentId ? document.getElementById(otherContentId) : null;
        if (otherContent) {
          otherContent.style.maxHeight = "0px";
        }
      });

      header.setAttribute("aria-expanded", String(!isOpen));
      header.classList.toggle("is-open", !isOpen);

      const contentId = header.getAttribute("aria-controls");
      const content = contentId ? document.getElementById(contentId) : null;
      if (!content) {
        return;
      }

      content.style.maxHeight = !isOpen ? `${content.scrollHeight}px` : "0px";
    });
  });
}