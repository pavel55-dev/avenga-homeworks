export function renderUserList(users, container) {
  container.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";

    card.innerHTML = `
      <h3>${user.firstname} ${user.lastname}</h3>
      <p>${user.email}</p>
      <p>${user.website}</p>
    `;

    card.addEventListener("click", () => {
      window.location.href = `profile.html?id=${user.id}`;
    });

    container.appendChild(card);
  });
}

export function renderUserProfile(user, images, container) {
  const imageIndex = user.id % images.length;
  const userImage = images[imageIndex].url;

  container.innerHTML = `
    <img src="${userImage}" alt="User Photo" style="width:150px;height:150px;border-radius:50%;object-fit:cover;margin-bottom:15px;">
    <h1>${user.firstname} ${user.lastname}</h1>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Website:</strong> ${user.website}</p>
    <p><strong>Birthday:</strong> ${user.birthday}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>

    <h3>Address</h3>
    <p>
      ${user.address.street}<br>
      ${user.address.city}, ${user.address.country}
    </p>

    <button id="photosBtn">Photos</button>
    <div id="photos"></div>
  `;
}

export function renderImages(images, container) {
  container.innerHTML = "";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
  container.style.gap = "10px";

  images.forEach((img) => {
    const image = document.createElement("img");
    image.src = img.url;
    image.alt = "User photo";
    image.style.width = "100%";
    image.style.borderRadius = "8px";

    container.appendChild(image);
  });
}

export function renderGallery(images, galleryEl, modalEl, modalImgEl) {
  galleryEl.innerHTML = "";

  images.forEach((img) => {
    const image = document.createElement("img");
    image.src = img.url;
    image.style.width = "100%";
    image.style.cursor = "pointer";
    image.alt = "Gallery image";

    image.addEventListener("click", () => {
      modalImgEl.src = img.url;
      modalEl.style.display = "flex";
    });

    galleryEl.appendChild(image);
  });

  modalEl.addEventListener("click", () => {
    modalEl.style.display = "none";
  });
}
