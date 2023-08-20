const colorSwitch = document.getElementById("input-color-switch");

// Check if user has a preference saved in localStorage
const savedMode = localStorage.getItem("colorMode");
if (savedMode === "dark") {
  colorSwitch.checked = true;
  darkModeOn();
} else {
  colorSwitch.checked = false;
  darkModeOff();
}

colorSwitch.addEventListener("click", toggleMode);

function toggleMode() {
  if (colorSwitch.checked) {
    darkModeOn();
    localStorage.setItem("colorMode", "dark");
  } else {
    darkModeOff();
    localStorage.setItem("colorMode", "light");
  }
}

function darkModeOn() {
  document.body.classList.add("light-mode");
}

function darkModeOff() {
  document.body.classList.remove("light-mode");
}

//menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle menu when hamburger button is clicked
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-link").forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking anywhere outside the menu
document.body.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// document.querySelectorAll(".nav-link").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );

// document.querySelector("body").addEventListener("click", function () {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// });
