import { getUsers, getImages } from "./api.js";
import { renderUserList } from "./render.js";

async function init() {
  const container = document.getElementById("users");

  const users = await getUsers();
  const images = await getImages();

  renderUserList(users, images, container);
}

init();
