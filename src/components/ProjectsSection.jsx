import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A Spring Boot web app to manage expenses and budgets. Built with Java, it leverages Spring Boot features like dependency injection, security, and data access.",
    github: "https://github.com/Sakhi97/ExpenseTracker",
  },
  {
    title: "Personal Trainer App",
    description:
      "A personal trainer app built using Create React App and Bootstrap, featuring API calls to retrieve and merge backend data. It includes a calendar for scheduling, a statistics dashboard, and a customer and training list for easy management.",
    github: "https://github.com/Sakhi97/pt-app-deploy",
  },
  {
    title: "Habitude App",
    description:
      "A mobile application built with React Native and Expo, featuring authentication and Firebase for data storage. It integrates various libraries for UI elements and animations to enhance the user experience.",
    github: "https://github.com/Sakhi97/final-project-habitude-app",
  },
];

function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const current = projects[currentIndex];

  return (
    <section id="projects" className="py-12 md:py-24 px-6 md:px-12 lg:px-32">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 font-oswald text-center">Projects</h2>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10 relative">
        <h3 className="text-lg md:text-xl font-semibold mb-4 font-oswald">{current.title}</h3>
        <p className="text-sm md:text-base leading-relaxed mb-4 font-inter">{current.description}</p>
        <a
          href={current.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-black text-sm hover:underline transition-colors"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>

        <button
          onClick={prevProject}
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full focus:outline-none transition-colors"
          aria-label="Previous project"
        >
          <FaArrowLeft size={16} className="md:w-5 md:h-5" />
        </button>
        
        <button
          onClick={nextProject}
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full focus:outline-none transition-colors"
          aria-label="Next project"
        >
          <FaArrowRight size={16} className="md:w-5 md:h-5" />
        </button>
      </div>
    </section>
  );
}

export default ProjectsSection;