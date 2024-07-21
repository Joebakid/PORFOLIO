'use strict';




//  STICKY NAV FOR BLOG.HTML
document.addEventListener("scroll", function () {
  // Get the navbar element with the class 'switch-blog'
  var switchBlogNavbar = document.querySelector(".navbar.switch-blog");

  // Get the distance from the top of the document to the top of the navbar
  const navbarOffset = switchBlogNavbar.offsetTop;

  // Check if the scroll position is past the navbar
  if (window.scrollY > navbarOffset) {
    // Add the 'sticky' class to the navbar
    switchBlogNavbar.classList.add("sticky");
  } else {
    // Remove the 'sticky' class from the navbar
    switchBlogNavbar.classList.remove("sticky");
  }
  // document.querySelector(".sticky").style.transform = "scale(0.99)";
});

// const seeMoreBtn = document.querySelector(".see-more-btn");
// const disapearElements = document.querySelectorAll(".disapper");

// seeMoreBtn.addEventListener("click", function () {
//   disapearElements.forEach(function (element) {
//     element.style.visibility =
//       element.style.visibility === "hidden" ? "visible" : "hidden";
//     element.style.height = element.style.height === "0px" ? "100%" : "0";
//     element.style.transition = "all 0.5s ease-in";
//   });

// Use a timeout to change the button text after the transition
//   setTimeout(() => {
//     seeMoreBtn.textContent =
//       seeMoreBtn.textContent === "See More" ? "Hide Project" : "See More";
//   }, 500);
// });

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

// console.log(hamburger);

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

//  STICKY NAV FOR INDEX.HTML

const nav = document.querySelector(".navbar");
const header = document.querySelector("header");
const body = document.querySelector("body");
const bar = document.querySelectorAll(".bar");
const sectionOne = document.querySelector(".section-1");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

// form
//  const btn = document.getElementById('button');
//     const formContent = document.querySelector('.form-content');
//     const formContainer = document.querySelector('.new-letter-bgc');
//     const warning = document.querySelector('.warning');

//     document.getElementById('form').addEventListener('submit', function (event) {
//       event.preventDefault();

//       const emailInput = document.forms['contact']['email'].value;

//       if (!emailInput) {
//         warning.style.opacity = '1';
//       } else {
//         btn.value = 'Sending...';

//         const serviceID = 'default_service';
//         const templateID = 'template_sbogitg';

//         emailjs.sendForm(serviceID, templateID, this)
//           .then(() => {
//             btn.value = 'Subscribe Free';
//             formContainer.style.transform = 'scale(0.95)';
//             formContainer.style.transition = 'all 1s ease-in';
//             formContent.style.opacity = '0';

//             // Create a new element for the thank you message
//             const thankYouMessage = document.createElement('p');
//             thankYouMessage.textContent = 'Thanks for submitting! We will get back to you.';
//             thankYouMessage.classList.add('thank-you-message');
//             formContainer.appendChild(thankYouMessage);
//           }, (err) => {
//             btn.value = 'Subscribe Free';
//             alert(JSON.stringify(err));
//           });
//       }
//     });
