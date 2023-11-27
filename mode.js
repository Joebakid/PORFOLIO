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

console.log(hamburger);

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
// document.body.addEventListener("click", (event) => {
//   if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   }
// });

//  STICKY NAV

const nav = document.querySelector(".navbar");
const header = document.querySelector("header");
const body = document.querySelector("body");
const bar = document.querySelectorAll(".bar");
// const colorSwitch = document.querySelector(".color-switch");
const sectionOne = document.querySelector(".section-1");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");

  // bar.forEach(function (bars) {
  //   bars.style.width = "15px";
  //   bars.style.height = "2px";
  // });
  // hamburger.style.border = "none";
  // bar.style.width = "10px";
};

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// headerObserver.observe(sectionOne);

// GSAP

// gsap.fromTo(".tech-wrapper", { opacity: 0.2 }, { opacity: 1 });
gsap.fromTo(".line", { opacity: 0 }, { opacity: 1, duration: 5 });

// form
const formBtn = document.querySelector(".btn-form");
const formContent = document.querySelector(".form-content");
const formContainer = document.querySelector(".new-letter-bgc");
const warning = document.querySelector(".warning");

formBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const emailInput = document.forms["contact"]["email"].value;

  if (!emailInput) {
    warning.style.opacity = "1";
  } else {
    formContainer.style.transform = "scale(0.8)";
    formContainer.style.transition = "all 1s ease-in";
    formContent.style.opacity = "0";
    formBtn.style.transform = "scale(0.8)";

    // Create a new element for the thank you message
    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent =
      "Thanks for submitting! We will get back to you.";

    // Add a class or style to the thank you message if needed
    thankYouMessage.classList.add("thank-you-message");

    // Append the thank you message after the form content
    formContainer.appendChild(thankYouMessage);
  }
});
