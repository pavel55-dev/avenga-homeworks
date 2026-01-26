import { getUsers, getImages } from "./api.js";
import { renderUserProfile } from "./render.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("profile");

  const params = new URLSearchParams(window.location.search);
  const userId = Number(params.get("id"));

  if (!userId) {
    container.innerHTML = "<p>No user selected</p>";
    return;
  }

  const users = await getUsers();
  const images = await getImages();

  const user = users.find((u) => u.id === userId);

  if (!user) {
    container.innerHTML = "<p>User not found</p>";
    return;
  }

  renderUserProfile(user, images, container);

  // 👉 Go to gallery
  document.getElementById("photosBtn").addEventListener("click", () => {
    window.location.href = `gallery.html?id=${user.id}`;
  });
});
