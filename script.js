console.log("Script loaded");

const dateInput = document.getElementById("reservation-date");



// Current date
const today = new Date();
const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

function formatDate(date) {
  return date.toLocaleDateString("en-CA");
}

dateInput.min = formatDate(today);
dateInput.max = formatDate(lastDay);



const timeSelect = document.getElementById("reservation-time");

for (let hour = 11; hour <= 22; hour++) {
  const option = document.createElement("option");

  let displayHour = hour;
  let period = "AM";

  if (hour === 12) {
    period = "PM";
  } else if (hour > 12) {
    displayHour = hour - 12;
    period = "PM";
  }

  option.value = `${hour}:00`;
  option.textContent = `${displayHour}:00 ${period}`;

  timeSelect.appendChild(option);
}

let moved = false;

const fred = document.querySelector(".fred");
const chicken = document.querySelector(".chicken-sub")

chicken.addEventListener("click", () => {
  if (!moved) {
    gsap.to(".chicken-sub", {
      x: -300,
      y: 50,
      scale: 1.2,
      rotation: 360,
      duration: 1
    });

    moved = true; 
  } else {
    gsap.to(".chicken-sub", {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 1,
      scale: 1
    });
    moved = false;
  }
});

fred.addEventListener("click", () => {
  if (!moved) {
    gsap.to(".fred", {
      x: 700,
      y: 400,
      scale: 3,
      rotation: 360,
      duration: 1
    });

    moved = true;
  } else {
    gsap.to(".fred", {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 1
    });

    moved = false;
  }
});

