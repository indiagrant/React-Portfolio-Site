import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Bubble",
    description: (
      <>
        A tablet app that helps children understand and regulate their emotions.
        It encourages connection between adult and child through a series of
        activities and games.
        <br />
        <br />
        Tech Stack: React, Next.js, ChakraUI, Express, PostgreSQL.
      </>
    ),
    image: "/images/projects/BootRantMockup.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BootRant",
    description: (
      <>
        BootRant is a mobile journalling app that allows users to overcome their
        imposter syndrome by privately "bragging" their achievements and
        "ranting" their frustrations.
        <br />
        <br />
        Tech Stack: JavaScript, Node.js, Express, PostgreSQL.
      </>
    ),
    image: "/images/projects/BootRantMockup.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-white mt-4 mb-4">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 md:gap-14">
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
    </>
  );
};

export default ProjectSection;
