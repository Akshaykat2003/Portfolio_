import React from 'react';

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
      <h2 className="flex items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
        <span>Hello there</span><SiHey /><span>I am</span>
      </h2>
      <h1 className="text-6xl font-bold text-white sm:text-7xl">
        Akshay Katoch
      </h1>
      <p className="text-md text-gray-400 leading-7 my-4 sm:text-lg sm:leading-8">
        As a self-taught front-end software developer with a passion for responsive web design, I specialize in creating engaging web applications using HTML5, CSS3, JavaScript, Next.js, React.js, Firebase, and RESTful APIs. With over 2 years of experience working on team projects and personal projects, I continually refine my skills to deliver innovative and user-friendly solutions.
      </p>
      <div className="my-7 flex gap-4 flex-wrap">
        <button className="bg-teal-500 py-2 px-4 font-bold text-white border-2 border-teal-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="View Resume">
          <a href="https://drive.google.com/file/d/1SII_G21sDkcJahFKO8l25KG6XK_qYR26/view?usp=sharing" className="flex items-center gap-1">
            <span>View Resume</span>
            <RiProfileLine />
          </a>
        </button>
        <button className="bg-white py-2 px-4 font-bold text-teal-500 border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="Get in touch">
          <a href="#contact" className="flex items-center gap-1">
            <span>Get in touch</span>
            <RiContactsBookLine />
          </a>
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-xl text-white font-bold">Find me on:</h4>
        <ul className="flex gap-4">
          <li title="Twitter">
            <a href="#" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
              <FiTwitter />
            </a>
          </li>
          <li title="GitHub">
            <a href="#" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
              <FiGithub />
            </a>
          </li>
          <li title="LinkedIn">
            <a href="#" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
