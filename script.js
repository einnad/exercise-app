// elements
const exButtons = document.querySelectorAll(".ex");
const closeModalButton = document.querySelector(".close-modal");
const submitExModal = document.querySelector(".submit-ex-modal");

const exModal = document.querySelector(".ex-modal");
const overlay = document.querySelector(".overlay");
const exInputs = document.querySelector("ex-item");

const inputDescription = document.getElementsByName("description");
const inputDuration = document.getElementsByName("duration");
const inputIntensity = document.getElementsByName("intensity");
const inputMood = document.getElementsByName("mood");

// events
exButtons.forEach((button) => {
  // open modal
  button.addEventListener("click", () => {
    exModal.classList.add("ex-modal-open");
    overlay.classList.remove("hidden");
  });

  const activity = button.value;

  // update bg images
  const el = document.querySelector(`.${activity}`);
  el.style.backgroundImage = `url(/img/${activity}.jpg)`;
  el.style.backgroundSize = "cover";
});

// submitting form testing
submitExModal.addEventListener("click", (e) => {
  e.preventDefault();
  description = inputDescription[0].value;
  duration = inputDuration[0].value;

  for (let i = 0; i < inputIntensity.length; i++) {
    if (inputIntensity[i].checked) {
      intensity = inputIntensity[i].value;
    }
  }

  for (let i = 0; i < inputMood.length; i++) {
    if (inputMood[i].checked) {
      mood = inputMood[i].value;
    }
  }
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
