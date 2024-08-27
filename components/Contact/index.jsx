import React from "react";

// React Icons
import { 
    FaLinkedinIn, 
    FaInstagram,
    FaGithub,
    FaTwitter
} from "react-icons/fa";

const Contact = () => {
    return (
        <div className="py-8 pb-0 px-4 max-w-6xl m-auto sm:py-20" id="contact">
            <h1 className="text-3xl text-teal-500 font-bold sm:text-5xl text-center mb-10">
                Contact
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                <ul className="flex flex-col items-center">
                    <li className="mb-6 text-gray-300 text-md w-max" title="LinkedIn">
                        <a href="https://www.linkedin.com/in/akshay-katoch-9b4a6b271/" className="flex gap-2 items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaLinkedinIn className="text-xl"/>
                            <span className="text-sm font-medium">/Akshay</span>
                        </a>
                    </li>

                    <li className="mb-6 text-gray-300 text-md w-max" title="LinkedIn">
                        <a href="https://www.instagram.com/ak_shay1_5/" className="flex gap-2 items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            < FaInstagram className="text-xl"/>
                            <span className="text-sm font-medium">/Akshay</span>
                        </a>
                    </li>

                </ul>
                <ul className="flex flex-col items-center">
                    <li className="mb-6 text-gray-300 text-md w-max" title="GitHub">
                        <a href="https://github.com/Akshaykat2003" className="flex gap-2 items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaGithub className="text-xl"/>
                            <span className="text-sm font-medium">/Akshay</span>
                        </a>
                    </li>
                    <li className="text-gray-300 text-md w-max" title="Twitter">
                        <a href="https://x.com/AkshayK24813653" className="flex gap-2 items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaTwitter className="text-xl"/>
                            <span className="text-sm font-medium">/Akshay</span>
                        </a>
                    </li>
                </ul>
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className="text-2xl text-teal-500 font-bold mb-2  ml-10 sm:text-3xl text-center lg:text-left">Start a project?</h2>
                    <h3 className="text-md text-gray-400 ml-10 sm:text-xl text-center lg:text-left">akshaykatoch38@gmail.com</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
