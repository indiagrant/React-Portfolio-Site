import React from "react";

const SkillsSection = () => {
  return (
    <section id="skills">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Skills
      </h1>
      <ul className="flex flex-wrap gap-5 justify-center items-center text-[white] md:text-lg lg:text-xl lg:pb-1 lg:pt-10 sm:text-md ">
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          JavaScript
        </li>
        <li className="bg-pink-500 p-2 rounded-full  text-center w-32">
          TypeScript
        </li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">React</li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          Next.js
        </li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          Tailwind
        </li>
      </ul>
      <ul className="flex flex-wrap gap-5 justify-center items-center text-[white] md:text-lg lg:text-xl lg:pb-1 lg:pt-6 sm:text-md ">
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          Node.js
        </li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          Express
        </li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">SQL</li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">Jest</li>
      </ul>
      <ul className="flex flex-wrap gap-5 justify-center items-center text-[white] md:text-lg lg:text-xl lg:pt-6 sm:text-md">
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">Git</li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          Github
        </li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">SQL</li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">Figma</li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          Vercel
        </li>
      </ul>
      <ul className="flex flex-wrap gap-5 justify-center items-center text-[white] md:text-lg lg:text-xl lg:pb-10  lg:pt-6 sm:text-md mb-20 ">
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">CSS</li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">HTML5</li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          Playwright
        </li>
        <li className="bg-pink-500 p-2 rounded-full text-center w-32">
          Render
        </li>
      </ul>
    </section>
  );
};

export default SkillsSection;
