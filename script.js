const exButton = document.querySelectorAll(".ex");
const exModal = document.querySelector(".ex-modal");
const overlay = document.querySelector(".overlay");

exButton.forEach((button) => {
  button.addEventListener("click", () => {
    exModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});
