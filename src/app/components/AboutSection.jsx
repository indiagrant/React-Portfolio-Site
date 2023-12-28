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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-48 sm:py-16 lg:mt-20">
        <div className="lg:pt-12 md:mt-0 text-left flex flex-col h-full md:col-span-1">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="md:text-base lg:text-lg sm:text-sm mb-6">
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
        </div>
        <div className="flex items-center justify-center h-full">
          <Image
            src="/images/profile.jpg"
            width={230}
            height={230}
            alt="about image"
            className="mb-20 sm:mb-0"
          />
        </div>

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
    </section>
  );
};

export default AboutSection;
