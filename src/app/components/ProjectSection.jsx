import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Bubble - Children's Mindfulness App",
    description: (
      <div className="flex flex-col h-full">
        Mindfullness app that helps young children understand and regulate their
        emotions. It encourages connection between adult and child through a
        series of activities and exercises.
        <br />
        <br />
        Tech Stack: React, Next.js, ChakraUI, PostgreSQL.
      </div>
    ),
    image: "/images/projects/BubbleMockup.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/indiagrant/bubble_app",
    previewUrl: "https://bubble-app-two.vercel.app/",
  },
  {
    id: 2,
    title: "BootRant - Journalling App",
    description: (
      <div className="flex flex-col h-full">
        A mobile-first journalling app that allows users to overcome their
        imposter syndrome by privately &quot;bragging&quot; their achievements
        and &quot;ranting&quot; their frustrations.
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
    <div id="projects">
      <h2 className="text-4xl font-bold text-white mt-4 mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 md:gap-10 pb-20">
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
