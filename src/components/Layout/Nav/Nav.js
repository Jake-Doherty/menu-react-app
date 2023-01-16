import React, { useState } from "react";
import "./Nav.css";

export default function Nav() {
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        const menuBtn = document.getElementById("menu-btn");
        const navMenu = document.getElementById("nav-menu");
        const navContainer = document.getElementById("nav-container");
        if (toggle) {
            console.log("I am open");
            navContainer.classList.toggle("nav-collapse");
            navContainer.classList.toggle("nav-open");
            navMenu.classList.toggle("toggle-nav-menu-closed");
            navMenu.classList.toggle("toggle-nav-menu-open");
            menuBtn.classList.toggle("opaque");
            menuBtn.classList.toggle("transparent");
            setToggle(false);
        } else {
            console.log("I am closed");
            navContainer.classList.toggle("nav-open");
            navContainer.classList.toggle("nav-collapse");
            navMenu.classList.toggle("toggle-nav-menu-open");
            navMenu.classList.toggle("toggle-nav-menu-closed");
            menuBtn.classList.toggle("transparent");
            menuBtn.classList.toggle("opaque");
            setToggle(true);
        }
    };

    return (
        <>
            <nav id="nav-container" className="nav-collapse">
                <button
                    id="menu-btn"
                    className="transparent"
                    onClick={handleClick}
                >
                    <span className="menu-btn-line"></span>
                    <span className="menu-btn-line"></span>
                    <span className="menu-btn-line"></span>
                </button>
                <ul id="nav-menu" className="toggle-nav-menu-closed">
                    <li>
                        <a
                            className="nav-menu-link link-closed-opacity"
                            href="/"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-menu-link link-closed-opacity"
                            href="/about"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-menu-link link-closed-opacity"
                            href="/projects"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-menu-link link-closed-opacity"
                            href="/contact"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
