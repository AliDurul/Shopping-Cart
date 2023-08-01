import React from "react";

import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 w-full">
      <div className="container mx-auto flex justify-around">
        <div className="text-4xl text-white">
          <a href="https://github.com/AliDurul"><AiOutlineGithub /></a>
        </div>
        <div className="text-white text-3xl">
          <p>Lee Production</p>
        </div>
        <div className="text-4xl text-white">
          <a href="https://www.linkedin.com/in/ali-durul/"><AiFillLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
