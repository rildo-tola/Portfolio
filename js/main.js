console.log("Portfolio loaded");  // test that JS is working
console.log("JavaScript is connected");

// creating the Heading constant
const nameHeading = document.querySelector("#name");

// project objects
const projects = [
  {
title : "Weather app",
description: "Built a weather application using HTML, CSS, and JavaScript that retrieves weather information from the OpenWeather API. Implemented city search, dynamic weather information, loading/error states, weather icons, and condition-based interface changes. ",
features: [
      "Live OpenWeather API data (temperature in °C, descriptions, and dynamic icons) via city search.",
      "Asynchronous API requests (fetch, async/await) with robust try/catch error handling.",
      "Seamless DOM updates with smart inputs (Enter-key support, validation, auto-clear, and loading states).",
      "Dynamic backgrounds and color themes that adapt to weather, temperature, and day/night cycles.",
      "Smooth UI transitions, fade-in animations, and clear error messaging."
    ],
    tech: "HTML5, CSS3, JavaScript, REST APIs",
    live: "https://rildo-tola.github.io/weather-app/",
    github: "https://github.com/rildo-tola/weather-app",
    image: "images/weather-app.png"
  },

{
    title: "Task Tracker",
    description: "A lightweight task management application built with vanilla JavaScript, focused on simplicity, accessibility, and smooth user interaction. Designed to help users manage daily tasks efficiently without external libraries. ",
features: [ "Add and delete tasks with instant UI updates",
  "Mark tasks as completed with visual feedback",
  "Persistent storage with localStorage",
  "Real-time task counter for better progress tracking",
  "Full keyboard support for improved accessibility",
  "Subtle animations to enhance user experience"
],
tech: "HTML, CSS, JavaScript",
live: "https://rildo-tola.github.io/study-task-tracker/",
github:"https://github.com/rildo-tola/study-task-tracker",
image: "images/task-tracker.png"
  },

  {
title : "Responsive Portfolio",
description: "A mobile-first personal portfolio website designed to showcase projects, skills, and contact information in a clean and accessible way. Built with vanilla web technologies, focusing on responsiveness, usability, and maintainable code. ",
features: [
      "Fully responsive layout using mobile-first design principles",
      "Clean and intuitive navigation across all screen sizes",
      "Organized folder structure and eusable styles"
    ],
    tech: "HTML, CSS, JavaScript",
    live: "https://rildo-tola.github.io/phase-1-portfolio/",
    github: "https://github.com/rildo-tola/phase-1-portfolio",
    image: "images/portfolio.png"
  },


];

// stating project container
const projectsContainer = document.querySelector("#projectsContainer");

// loads projects into project card div
projects.forEach((project) => {
const projectCard = document.createElement("div");
projectCard.classList.add("project");

projectCard.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
<ul>
      ${project.features.map(feature => `<li>${feature}</li>`).join("")}
    </ul>

    <p><strong>Built with:</strong> ${project.tech}</p>

    <a href="${project.live}" target="_blank">Live Demo</a> |
    <a href="${project.github}" target="_blank">GitHub Repo</a>
<img src="${project.image}" alt="${project.title} screenshot">

    `;

    // load project cards to project container
projectsContainer.appendChild(projectCard);
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
