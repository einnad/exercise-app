// elements
const exButton = document.querySelectorAll(".ex");
const closeModalButton = document.querySelector(".close-modal");

const exModal = document.querySelector(".ex-modal");
const overlay = document.querySelector(".overlay");

// events
exButton.forEach((button) => {
  button.addEventListener("click", () => {
    exModal.classList.add("ex-modal-open");
    overlay.classList.remove("hidden");
  });
});

// closing modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !exModal.classList.contains("hidden")) {
    closeModal();
  }
});

overlay.addEventListener("click", (e) => {
  if (!exModal.classList.contains("hidden")) {
    closeModal();
  }
});

closeModalButton.addEventListener("click", closeModal);

function closeModal() {
  exModal.classList.remove("ex-modal-open");
  overlay.classList.add("hidden");
}
