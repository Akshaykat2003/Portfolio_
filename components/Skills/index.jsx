import React from "react";
// React Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-600" /> },
    ];

    return (
        <div className="py-12 px-4 max-w-6xl m-auto" id="skills">
            <h2 className="text-3xl text-teal-500 font-bold text-center mb-8 sm:text-4xl">
                My Skills
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-800 text-white text-center py-4 px-6 rounded-lg shadow-md transform hover:scale-105 ease-in-out duration-200 flex flex-col items-center"
                    >
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
