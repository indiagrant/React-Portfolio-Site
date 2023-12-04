import React from "react";
import GithubIcon from "/public/images/github.svg";
import LinkedinIcon from "/public/images/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="mt-20">
      <div>
        <h2 className="text-4xl font-bold text-white my-2 mb-5">
          Let's Connect!
        </h2>
        <h3 className="text-[white] mb-4">
          {""}
          I'm always looking for new opportunities, so feel free to reach out
          via my Linkedin or email!
        </h3>
        <div className="socials flex flex-row gap-2 mt-5">
          <Link href="https://github.com/indiagrant">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/india-grant">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
