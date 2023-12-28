import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Bubble",
    description: (
      <div className="flex flex-col h-full">
        React children&apos;s mindfullness app. <br></br>Delivered from ideation
        to MVP in a four week team.
        <br />
        <br />
        React | NextJS | ChakraUI | NodeJS | PostgreSQL | Playwright
      </div>
    ),
    image: "/images/projects/BubbleMockup.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/indiagrant/bubble_app",
    previewUrl: "https://bubble-app-two.vercel.app/",
  },
  {
    id: 2,
    title: "BootRant",
    description: (
      <div className="flex flex-col h-full">
        A mobile-first JS journalling app. <br></br>Designed, developed and
        delivered in a one week team.
        <br />
        <br />
        JavaScript | NodeJS | Express | PostgreSQL
      </div>
    ),
    image: "/images/projects/BootRantMockup.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/indiagrant/BootRant",
    previewUrl: "https://boot-rant-app.onrender.com/",
  },
  {
    id: 3,
    title: "Portfolio",
    description: (
      <div className="flex flex-col h-full">
        My React portfolio site.<br></br>
        Designed and developed myself using TailwindCSS.
        <br />
        <br />
        React | NextJS | TailwindCSS | JavaScript
      </div>
    ),
    image: "/images/projects/PortfolioMockup.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Keeping Tabs",
    description: (
      <div className="flex flex-col h-full">
        Coming Soon...<br></br>Solo project using external APIs
        <br />
        <br />
        React | NextJS | TailwindCSS | JavaScript | NodeJS | Express |
        PostgreSQL
      </div>
    ),
    image: "/images/projects/BattleshipsMockup.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <div id="projects">
      <h2 className="text-4xl font-bold text-white mt-4 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 md:gap-10 lg:pb-20 mb-20">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
