document.addEventListener("DOMContentLoaded", async () => {
  const includes = document.querySelectorAll("[data-include]");

  for (const el of includes) {
    const path = el.getAttribute("data-include");
    try {
      const res = await fetch(path);
      if (!res.ok) {
        console.error(`Failed to load partial: ${path}`, res.status);
        continue;
      }
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error(`Error loading partial: ${path}`, err);
    }
  }
});
