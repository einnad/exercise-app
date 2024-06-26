// elements
const exButtons = document.querySelectorAll(".ex");
const closeModalButton = document.querySelector(".close-modal");
const submitExModal = document.querySelector(".submit-ex-modal");
const deleteButtons = document.querySelector(".delete-wo");
const workoutButton = document.querySelector(".wo-switch");

const exModal = document.querySelector(".ex-modal");
const overlay = document.querySelector(".overlay");
const exInputs = document.querySelector("ex-item");
const workoutsContainer = document.querySelector(".workouts");

const inputDescription = document.getElementsByName("description");
const inputDuration = document.getElementsByName("duration");
const inputMood = document.getElementsByName("mood");

// variables
const workouts = [
  {
    id: "1",
    date: "19/07/2023",
    description: "Walk around the park",
    duration: "1 hour",
    mood: "Happy",
  },
  {
    id: "2",
    date: "09/10/2023",
    description: "Weight training",
    duration: "30 minutes",
    mood: "Average",
  },
];

let id = 2;

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

// submit form
submitExModal.addEventListener("click", (e) => {
  e.preventDefault();
  description = inputDescription[0].value;
  duration = inputDuration[0].value;

  for (let i = 0; i < inputMood.length; i++) {
    if (inputMood[i].checked) {
      mood = inputMood[i].value;
    }
  }

  workouts.push({
    id: getNewId(),
    date: new Date().toLocaleDateString(),
    description: description,
    duration: duration,
    mood: mood,
  });
  displayWorkouts();
  closeModal();
});

workoutButton.addEventListener("click", function () {
  document.querySelector(".ex-container").classList.toggle("hidden");
  workoutsContainer.classList.toggle("hidden");
});

// // delete testing
// function deleteWorkout() {
//   workouts = workouts.filter((w) => {
//     console.log(w.id);
//     return w.id !== deleteId;
//   });
//   displayWorkouts();
// }

// display workouts
function displayWorkouts() {
  workoutsContainer.innerHTML = "";
  workouts.forEach((w) => {
    el = `<div class="wo-box"><p>${w.date}</p>
      <p>${w.description}</p>
      <p>${w.duration}</p>
      <p>${w.mood}</p></div>`;

    workoutsContainer.insertAdjacentHTML("beforeend", el);
  });
}

function getNewId() {
  return id++ + "";
}

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

displayWorkouts();
