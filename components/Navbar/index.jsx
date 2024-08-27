import { useState } from 'react';
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    return (
        <header className={`py-4 px-6 flex justify-between items-center flex-wrap bg-gray-900 shadow-lg ${styles.header} ${menuOpen ? `${styles.open}` : ""}`}>
            <div className="z-50">
                <h2 className="text-3xl text-white font-bold">
                    <a href="" title="Akshay Katoch">Akshay Katoch</a>
                </h2>
            </div>
            <nav>
                <ul 
                    className={`menu transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0 m-0 py-10 px-6 bg-black z-40 w-full h-full sm:relative sm:translate-x-0 sm:flex sm:py-0 sm:bg-transparent sm:w-auto sm:h-auto sm:static ${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
                    <li className="mb-6 mt-10 mx-0 sm:mb-0 sm:mt-0 sm:mx-3">
                        <a href="#experiences" className="text-lg  text-white font-semibold transition-colors duration-150 hover:text-teal-400" onClick={toggleMenu}>
                            Experiences
                        </a>
                    </li>
                    <li className="mb-6 mx-0 sm:mb-0 sm:mx-3">
                        <a href="#skills" className="text-lg text-white font-semibold transition-colors duration-150 hover:text-teal-400" onClick={toggleMenu}>
                            Skills
                        </a>
                    </li>
                    <li className="mb-6 mx-0 sm:mb-0 sm:mx-3">
                        <a href="#projects" className="text-lg text-white font-semibold transition-colors duration-150 hover:text-teal-400" onClick={toggleMenu}>
                            Projects
                        </a>
                    </li>
                    <li className="mb-6 mx-0 sm:mb-0 sm:mx-3">
                        <a href="#contact" className="text-lg text-white font-semibold transition-colors duration-150 hover:text-teal-400" onClick={toggleMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div 
                className={`z-50 flex flex-col cursor-pointer justify-center items-center sm:hidden ${styles.hamburger} ${menuOpen ? `${styles.open}` : ""}`} 
                onClick={toggleMenu}
            >
                <span className="h-0.5 w-8 mb-1.5 bg-white transition-transform duration-300 transform ${menuOpen ? 'rotate-45 translate-y-1' : ''}"></span>
                <span className="h-0.5 w-8 mb-1.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}"></span>
                <span className="h-0.5 w-8 mb-1.5 bg-white transition-transform duration-300 transform ${menuOpen ? '-rotate-45 -translate-y-1' : ''}"></span>
            </div>
        </header>
    );
};

export default Navbar;
