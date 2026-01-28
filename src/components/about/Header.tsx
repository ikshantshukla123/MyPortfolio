import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-lime-500 bg-clip-text text-transparent">
        Ikshant Shukla
      </h1>
      <p className="text-lg md:text-xl text-neutral-300 mb-4">
        Full Stack Developer
      </p>
      <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-6">
        Passionate about building scalable web applications and contributing to open source.
        Currently working some personal projects, with experience in
        backend development, payment systems, and learning management platforms.
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-4 mb-8">
        <a
          href="https://github.com/ikshantshukla123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300"
        >
          <AiFillGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/ikshant-shukla-097771327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300"
        >
          <AiFillLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/ish_nk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300"
        >
          <BsTwitter className="w-6 h-6" />
        </a>
        <a
          href="mailto:ikshankshukla44@gmail.com"
          className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300"
        >
          <AiFillMail className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default Header;
