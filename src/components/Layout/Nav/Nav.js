import React from "react";
import "./Nav.css";

export default function Nav({ toggle, setToggle, nav, setNav }) {
    const handleClick = () => {
        const menuBtn = document.getElementById("menu-btn");
        const navMenu = document.getElementById("nav-menu");
        const navContainer = document.getElementById("nav-container");
        if (toggle) {
            navContainer.classList.toggle("nav-collapse");
            navContainer.classList.toggle("nav-open");
            navMenu.classList.toggle("toggle-nav-menu-closed");
            navMenu.classList.toggle("toggle-nav-menu-open");
            menuBtn.classList.toggle("opaque");
            menuBtn.classList.toggle("transparent");
            setToggle(false);
        } else {
            navContainer.classList.toggle("nav-open");
            navContainer.classList.toggle("nav-collapse");
            navMenu.classList.toggle("toggle-nav-menu-open");
            navMenu.classList.toggle("toggle-nav-menu-closed");
            menuBtn.classList.toggle("transparent");
            menuBtn.classList.toggle("opaque");
            setToggle(true);
        }
    };

    const handleNavClick = (e) => {
        if (e.target.name === "home") {
            setNav(e.target.value);
        }
        if (e.target.name === "about") {
            setNav(e.target.value);
        }
        if (e.target.name === "projects") {
            setNav(e.target.value);
        }
        if (e.target.name === "contact") {
            setNav(e.target.value);
        }
    };

    return (
        <>
            <nav id="nav-container" className="nav-collapse">
                <div className="menu-button-container">
                    <button
                        id="menu-btn"
                        className="transparent"
                        onClick={handleClick}
                    >
                        <span className="menu-btn-line"></span>
                        <span className="menu-btn-line"></span>
                        <span className="menu-btn-line"></span>
                    </button>
                </div>
                <ul id="nav-menu" className="toggle-nav-menu-closed">
                    <li>
                        <button
                            className="navigation-button"
                            name="home"
                            value="home"
                            onClick={handleNavClick}
                        >
                            Home
                        </button>
                    </li>
                    <span className="nav-divider"> | </span>
                    <li>
                        <button
                            className="navigation-button"
                            name="about"
                            value="about"
                            onClick={handleNavClick}
                        >
                            About
                        </button>
                    </li>
                    <span className="nav-divider"> | </span>
                    <li>
                        <button
                            className="navigation-button"
                            name="projects"
                            value="projects"
                            onClick={handleNavClick}
                        >
                            Projects
                        </button>
                    </li>
                    <span className="nav-divider"> | </span>
                    <li>
                        <button
                            className="navigation-button"
                            name="contact"
                            value="contact"
                            onClick={handleNavClick}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
