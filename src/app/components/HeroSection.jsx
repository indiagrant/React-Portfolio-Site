"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-16 pb-20">
        <div className="col-span-7 place-self-center sm:text-left text-center mt-20 justify-self-start">
          <h1 className="text-white mb-8 text-2xl sm:text-5xl lg:text-6xl lg:leading-normal lg: font-extrabold">
            Hi, I&apos;m India
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600">
              <TypeAnimation
                sequence={[
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
          <p className="text-[white] text-base sm:text-lg mb-6 lg:text-xl mt-10">
            An English Literature graduate and former Civil Servant turned
            Software Developer based in London, UK. <br />
          </p>
          <div>
            {/* <Link href="/IndiaGrantCV.pdf" passHref target="_blank">
              <button className="mt-5 mb-10 px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-700 via-pink-500 to-pink-400 shadow-xl drop-shadow-md hover:scale-105 hover:shadow-xl text-white">
                View My CV
              </button>
            </Link> */}
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
