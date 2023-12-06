import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Bubble",
    description: (
      <div className="flex flex-col h-full">
        A tablet app that helps children understand and regulate their emotions.
        It encourages connection between adult and child through a series of
        activities and games.
        <br />
        <br />
        Tech Stack: React, Next.js, ChakraUI, Express, PostgreSQL.
      </div>
    ),
    image: "/images/projects/BootRantMockup.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/indiagrant/BootRant",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BootRant",
    description: (
      <div className="flex flex-col h-full">
        A mobile-first journalling app that allows users to overcome their
        imposter syndrome by privately "bragging" their achievements and
        "ranting" their frustrations.
        <br />
        <br />
        Tech Stack: JavaScript, Node.js, Express, PostgreSQL.
      </div>
    ),
    image: "/images/projects/BootRantMockup.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/indiagrant/BootRant",
    previewUrl: "https://boot-rant-app.onrender.com/",
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white mt-4 mb-4">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-5 md:gap-5 pb-20">
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
