import { getImages } from "./api.js";
import { renderGallery } from "./render.js";

document.addEventListener("DOMContentLoaded", async () => {
  const galleryEl = document.getElementById("gallery");
  const modalEl = document.getElementById("modal");
  const modalImgEl = document.getElementById("modalImg");

  try {
    const images = await getImages();
    renderGallery(images, galleryEl, modalEl, modalImgEl);
  } catch (error) {
    console.error("Failed to load images:", error);
  }
});
