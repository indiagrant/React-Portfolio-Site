"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

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
        React - NextJS - ChakraUI - NodeJS - PostgreSQL - Playwright
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
        JavaScript - NodeJS - Express - PostgreSQL
      </div>
    ),
    image: "/images/projects/BootRantMockup.png",
    tag: ["All", "Mobile"],
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
        React - NextJS - TailwindCSS - JavaScript
      </div>
    ),
    image: "/images/projects/PortfolioMockup.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/indiagrant/React-Portfolio-Site",
    previewUrl: "https://indiagrant.vercel.app/",
  },
  {
    id: 4,
    title: "KeepingTabs",
    description: (
      <div className="flex flex-col h-full">
        Coming Soon...<br></br>Solo project using external APIs
        <br />
        <br />
        React - NextJS - TailwindCSS - JavaScript - NodeJS - Express -
        PostgreSQL
      </div>
    ),
    image: "/images/projects/KeepingTabsMockup.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div id="projects">
      <h2 className="text-4xl font-bold text-white mt-4 mb-5 text-center">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-5">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-12 md:gap-12 lg:pb-20 mb-20">
        {filteredProjects.map((project) => (
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
