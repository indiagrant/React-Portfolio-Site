"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-10">
        <div className="col-span-7 place-self-center text-center sm:text-left lg:text-center mt-20">
          <h1 className="text-white mb-8 text-2xl sm:text-5xl lg:text-6xl font-extrabold">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "India",
                  1500, // wait 1s before replacing "Mice" with "Hamsters"
                  "a full-stack developer",
                  1500,
                  "a problem solver",
                  1500,
                  "an avid learner",
                  1500,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[white] text-base sm:text-lg mb-6 lg:text-xl">
            An English Lit grad/ex Civil Servant turned Software Dev based in
            London, UK. <br />
            When I'm not coding, I'm either gaming or trying new cuisines from
            around the world.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-700 via-pink-500 to-pink-400 shadow-xl drop-shadow-md hover:scale-105 hover:shadow-xl text-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
