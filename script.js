const openCardBtn = document.getElementById("open-card");
const frontPage = document.getElementById("front-page");
const cardBuilder = document.getElementById("card-builder");

openCardBtn.addEventListener("click", () => {
  frontPage.classList.add("hidden");
  cardBuilder.classList.remove("hidden");
});

// Photo upload logic
function handleImageUpload(inputEl, targetDiv) {
  inputEl.addEventListener("change", () => {
    const file = inputEl.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      document.getElementById(targetDiv).style.backgroundImage =
        `url(${url})`;
    }
  });
}

handleImageUpload(document.getElementById("img1"), "photo1");
handleImageUpload(document.getElementById("img2"), "photo2");
handleImageUpload(document.getElementById("img3"), "photo3");

// Download card
document.getElementById("download-btn").addEventListener("click", () => {
  const card = document.getElementById("card-preview");
  html2canvas(card).then((canvas) => {
    const link = document.createElement("a");
    link.download = "valentines-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
