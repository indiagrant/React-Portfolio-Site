import React from "react";

const SkillsSection = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-white my-2 mb-6">Skills</h1>;
      <ul className="flex flex-wrap gap-4 justify-center items-center text-[#f472a8] md:text-lg lg:text-xl sm:text-md mb-20">
        <li className="border-r-2 pr-4">JavaScript</li>
        <li className="border-r-2 pr-4">TypeScript</li>
        <li className="border-r-2 pr-4">React</li>
        <li className="border-r-2 pr-4">Next.js</li>
        <li className="border-r-2 pr-4">Tailwind</li>
        <li className="border-r-2 pr-4">Node.js</li>
        <li className="border-r-2 pr-4">Express</li>
        <li className="border-r-2 pr-4">SQL</li>
        <li className="border-r-2 pr-4">Jest</li>
        <li>Playwright</li>
      </ul>
    </>
  );
};

export default SkillsSection;
