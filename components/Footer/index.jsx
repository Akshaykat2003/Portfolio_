import React from "react";

// React Icons
import { 
    FaLinkedinIn, 
    FaInstagram,
    FaGithub,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-2">
            <div className="py-4 border-b border-b-gray-800 flex justify-between items-center max-w-6xl m-auto">
                <h2 className="text-md text-white font-semibold">
                    <a href="">Akshay Katoch</a>
                </h2>
                <ul className="flex justify-center items-center gap-3">
                    <li className="text-white text-sm" title="LinkedIn">
                        <a href="https://www.linkedin.com/in/akshay-katoch-9b4a6b271/" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="text-white text-sm" title="Codepen">
                        <a href="https://www.instagram.com/ak_shay1_5/" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="text-white text-sm" title="GitHub">
                        <a href="https://github.com/Akshaykat2003" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="text-white text-sm" title="Twitter">
                        <a href="https://x.com/AkshayK24813653" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="py-8 flex flex-col gap-4 justify-between items-center max-w-6xl m-auto sm:flex-row sm:gap-0">
                <ul className="flex justify-center items-center gap-4">
                    <li className="text-gray-400 text-sm" title="Experiences">
                        <a href="#experiences" className="font-bold ease-in-out duration-150 hover:text-white">
                            Experiences
                        </a>
                    </li>
                    <li className="text-gray-400 text-sm" title="Projects">
                        <a href="#projects" className="font-bold ease-in-out duration-150 hover:text-white">
                            Projects
                        </a>
                    </li>
                    <li className="text-gray-400 text-sm" title="Contact">
                        <a href="#ontact" className="font-bold ease-in-out duration-150 hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
                <h5 className="text-white font-initial text-sm">&copy; 2022 - Akshay Katoch. All Rights Reserved.</h5>
            </div>

        </div>
    );
}

export default Footer;