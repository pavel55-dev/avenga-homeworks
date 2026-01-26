import { getUsers } from "./api.js";
import { renderUserList } from "./render.js";

document.addEventListener("DOMContentLoaded", async () => {
  const usersContainer = document.getElementById("users");

  if (!usersContainer) {
    console.error('Element with id="users" not found in index.html');
    return;
  }

  try {
    const users = await getUsers();
    renderUserList(users, usersContainer);
  } catch (error) {
    console.error("Error loading users:", error);
  }
});
