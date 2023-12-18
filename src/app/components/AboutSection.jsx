"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>PostgreSQL</li>
        <li>Jest</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // const handleTabChange = (id) => {
  //   startTransition(() => {
  //     setTab(id);
  //   });
  // };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 lg:mt-20">
        <Image
          src="/images/profile.jpg"
          width={230}
          height={230}
          alt="about image"
        />
        <div className="mt-4 lg:pt-12 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="md:text-base lg:text-lg sm:text-sm">
            I&apos;m a Junior Full-Stack Developer who loves taking massive
            problems and going through them with a fine-tooth comb. <br></br>
            <br></br>
            In the ever-evolving landscape of technology, I find my passion
            grounded in the dynamism, creativity and logic that Software
            Development demands. The constant innovation fuels my commitment to
            a never-ending learning journey.
            <br></br>
            <br></br> As a former Humanities graduate, I look to bring a
            different perspective to development. With a focus on detailed, tidy
            and clear-cut code, I&apos;m eager to thrive in an environment that
            embraces progress and growth. <br></br>
          </p>
          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 pb-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
