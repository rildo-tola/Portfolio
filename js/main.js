
// =========================================
// 1. PROJECT DATA
// =========================================

// Each object represents one project.
// JavaScript uses this information to generate the cards.

const projects = [

  {
    title: "Weather App",

    description:
      "Built a weather application using HTML, CSS and JavaScript that retrieves weather information from the OpenWeather API. Includes city search, dynamic weather information, loading and error states, and weather-based interface changes.",

    features: [
      "Live OpenWeather API data through city search",
      "Temperature, weather descriptions and dynamic icons",
      "Asynchronous API requests using fetch and async/await",
      "Error handling and loading states",
      "Dynamic backgrounds based on weather conditions",
      "Keyboard support and input validation"
    ],

    tech: "HTML5, CSS3, JavaScript, REST APIs",

    live: "https://rildo-tola.github.io/weather-app/",

    github: "https://github.com/rildo-tola/weather-app",

    image: "images/weather-app.png"
  },


  {
    title: "Study Task Tracker",

    description:
      "A lightweight task management application built with vanilla JavaScript, focused on simplicity, accessibility and smooth user interaction. Designed to help users manage daily tasks efficiently without external libraries.",

    features: [
      "Add and delete tasks with instant UI updates",
      "Mark tasks as completed with visual feedback",
      "Persistent storage using localStorage",
      "Real-time task counter",
      "Keyboard support for improved accessibility",
      "Subtle animations to enhance user experience"
    ],

    tech: "HTML, CSS, JavaScript, Local Storage",

    live: "https://rildo-tola.github.io/study-task-tracker/",

    github: "https://github.com/rildo-tola/study-task-tracker",

    image: "images/task-tracker.png"
  },


  {
    title: "React Project Showcase",

    description:
      "A React application demonstrating API integration, reusable components, custom hooks and dynamic data handling.",

    features: [
      "Fetches posts from the JSONPlaceholder API",
      "Filters posts by selected user",
      "Reusable components for cleaner UI structure",
      "Custom usePosts hook for API fetching logic",
      "Loading and error states with retry functionality"
    ],

    tech: "React, JavaScript, CSS, Vite",

    live: "https://rildo-tola.github.io/react-project-showcase/",

    github: "https://github.com/rildo-tola/react-project-showcase",

    image: "images/React-Showcase.png"
  }

];


// =========================================
// 2. GET PROJECT CONTAINER
// =========================================

// Find the HTML element where project cards will appear.

const projectsContainer = document.querySelector("#projectsContainer");


// =========================================
// 3. GENERATE PROJECT CARDS
// =========================================

if (projectsContainer) {

  // Loop through each project object.
  // "index" represents the position of the project in the array.

  projects.forEach((project, index) => {

    // Create an article element for the project card.
    const projectCard = document.createElement("article");

    // Assign the CSS class that styles the card.
    projectCard.classList.add("project-card");


    // Generate the card's HTML.
    projectCard.innerHTML = `

      <!-- Project number and title -->

      <div class="project-card__top">

        <span class="project-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="project-type">
          ${project.title}
        </span>

      </div>


      <!-- Project screenshot -->

      ${
        project.image
          ? `
            <img
              class="project-card__image"
              src="${project.image}"
              alt="${project.title} screenshot"
              loading="lazy"
            >
          `
          : ""
      }


      <!-- Project information -->

      <div class="project-card__content">

        <h3>${project.title}</h3>

        <p>${project.description}</p>


        <!-- Generate technology labels automatically -->

        <div class="project-tech">

          ${
            project.tech.split(",").map(technology => `
              <span>${technology.trim()}</span>
            `).join("")
          }

        </div>


        <!-- Expandable project features -->

        <details class="project-features">

          <summary>View key features</summary>

          <ul>

            ${
              project.features.map(feature => `
                <li>${feature}</li>
              `).join("")
            }

          </ul>

        </details>

      </div>


      <!-- Project links -->

      <div class="project-card__links">

        <a
          href="${project.github}"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="${project.live}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo ↗
        </a>

      </div>

    `;


    // Add the generated card to the projects container.
    projectsContainer.appendChild(projectCard);

  });

} else {

  // Display an error if the container cannot be found.
  console.error("Projects container was not found.");

}


// =========================================
// 4. CONFIRM THAT JAVASCRIPT IS CONNECTED
// =========================================

console.log("Portfolio loaded successfully.");
console.log(`${projects.length} projects generated.`);
