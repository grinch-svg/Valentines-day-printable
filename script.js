// ------------------------------
// 1️⃣ SHOW BACK PAGE WHEN HEART IS CLICKED
// ------------------------------
document.getElementById("open-card").addEventListener("click", () => {
  document.getElementById("front-page").classList.add("hidden");
  document.getElementById("card-builder").classList.remove("hidden");
});

// ------------------------------
// 2️⃣ IMAGE UPLOADS (SCATTERED PHOTOS)
// ------------------------------
function handleImageUpload(inputEl, targetDiv) {
  inputEl.addEventListener("change", () => {
    const file = inputEl.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const photo = document.getElementById(targetDiv);
      photo.style.backgroundImage = `url(${url})`;

      // Random rotation and position within card
      const x = Math.floor(Math.random() * (document.getElementById('card-preview').offsetWidth - 120));
      const y = Math.floor(Math.random() * (document.getElementById('card-preview').offsetHeight - 120));
      const angle = Math.floor(Math.random() * 30 - 15); // -15 to +15 deg
      photo.style.left = x + "px";
      photo.style.top = y + "px";
      photo.style.transform = `rotate(${angle}deg)`;
    }
  });
}

handleImageUpload(document.getElementById("img1"), "photo1");
handleImageUpload(document.getElementById("img2"), "photo2");
handleImageUpload(document.getElementById("img3"), "photo3");

// ------------------------------
// 3️⃣ RANDOM FLOATING DECORATIONS ON FRONT PAGE
// ------------------------------
function randomizeFloating() {
  const floats = document.querySelectorAll('.floating');
  floats.forEach(el => {
    const x = Math.floor(Math.random() * (window.innerWidth - 60));
    const y = Math.floor(Math.random() * (window.innerHeight - 60));
    const duration = Math.random() * 5 + 5; // 5–10 seconds
    const scale = Math.random() * 0.5 + 0.75; // 0.75–1.25 scale

    el.style.setProperty('--start-x', x + 'px');
    el.style.setProperty('--start-y', y + 'px');
    el.style.animationDuration = duration + 's';
    el.style.transform = `scale(${scale})`;
  });
}

// Run once when page loads
window.addEventListener('load', randomizeFloating);

// ------------------------------
// 4️⃣ DOWNLOAD FULL CARD (FRONT + BACK)
// ------------------------------
document.getElementById("download-btn").addEventListener("click", () => {
  const cardContainer = document.getElementById("card-container");
  html2canvas(cardContainer, {useCORS: true, allowTaint: true}).then(canvas => {
    const link = document.createElement("a");
    link.download = "valentine-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
