import React from "react";
import GithubIcon from "/public/images/github.svg";
import LinkedinIcon from "/public/images/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="">
      <div>
        <h2 className="text-4xl font-bold text-white my-2 mb-6">
          Let's Connect!
        </h2>
        <p className="text-[white] mb-6 md:text-base lg:text-lg sm:text-sm">
          {""}
          I'm always looking for new opportunities and challenges, so feel free
          to reach out.
        </p>
        <div className="socials flex flex-row gap-4 mt-5">
          <Link href="https://github.com/indiagrant">
            <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/india-grant">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
