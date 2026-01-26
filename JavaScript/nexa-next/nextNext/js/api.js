const USERS_KEY = "users";
const IMAGES_KEY = "images";

const USERS_API_URL = "https://fakerapi.it/api/v1/persons?_quantity=50";
const IMAGES_API_URL = "https://fakerapi.it/api/v1/images?_quantity=12";

// ---------- USERS ----------
export async function getUsers() {
  const loadingIndicatorId = "users-loading-indicator";
  let indicator = document.getElementById(loadingIndicatorId);

  if (!indicator) {
    indicator = document.createElement("div");
    indicator.id = loadingIndicatorId;
    indicator.textContent = "Loading users...";
    indicator.style.cssText =
      "padding:8px 12px;margin:12px auto;text-align:center;font-family:sans-serif;color:#555;";
    document.body.appendChild(indicator);
  } else {
    indicator.textContent = "Loading users...";
  }

  try {
    const cachedUsers = localStorage.getItem(USERS_KEY);
    if (cachedUsers) {
      indicator.remove();
      return JSON.parse(cachedUsers);
    }

    const response = await fetch(USERS_API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const result = await response.json();
    const users = result.data;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    indicator.remove();
    return users;
  } catch (error) {
    indicator.textContent = "Failed to load users. Please try again later.";
    console.error("getUsers error:", error);
    throw error;
  }
}

// ---------- IMAGES ----------
export async function getImages() {
  const cachedImages = localStorage.getItem(IMAGES_KEY);
  if (cachedImages) {
    return JSON.parse(cachedImages);
  }

  const response = await fetch(IMAGES_API_URL);
  const result = await response.json();

  const images = result.data;
  localStorage.setItem(IMAGES_KEY, JSON.stringify(images));

  return images;
}

// ---------- OPTIONAL ----------
export function clearCache() {
  localStorage.removeItem(USERS_KEY);
  localStorage.removeItem(IMAGES_KEY);
}
