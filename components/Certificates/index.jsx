import React from "react";
import certificates from "./data/data.js";

const Certificates = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 pt-8" id="certificates">
            <h1 className="text-3xl text-center text-teal-500 font-bold sm:text-4xl">Certificates</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                {certificates.map((cert, index) => (
                    <div 
                        key={index} 
                        className="bg-cyan-900 rounded-lg p-4 flex flex-col items-center hover:bg-cyan-800 hover:shadow-lg transition duration-150 transform hover:scale-105"
                    >
                        <img 
                            src={cert.imageUrl} 
                            alt={cert.title} 
                            className="w-full h-32 object-cover rounded-md mb-4" 
                        />
                        <h2 className="text-xl font-bold text-white text-wrap">{cert.title}</h2>
                        <p className="text-blue-500 text-xl">{cert.issuer}</p>
                        <p className="text-sm text-gray-400">{cert.year}</p>
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-2 text-white underline hover:text-teal-400 transition duration-200 px-2 py-1"
                        >
                            View Certificate
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
