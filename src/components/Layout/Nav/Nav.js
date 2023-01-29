import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    const handleNavToggle = () => {
        const navToggleBtn = document.getElementById("nav-toggle-btn");
        const navContainer = document.getElementById("nav-container");
        navContainer.classList.toggle("nav-collapse");
        navContainer.classList.toggle("nav-open");
        navToggleBtn.classList.toggle("toggle-btn-open");
        navToggleBtn.classList.toggle("toggle-btn-close");
    };

    return (
        <>
            <nav id="nav-container" className="nav-collapse">
                <div
                    onClick={handleNavToggle}
                    className="toggle-btn-close"
                    id="nav-toggle-btn"
                >
                    <div id="btn-filler"></div>
                </div>

                <NavLink
                    id="menu-btn"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    className="navigation-button"
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    id="menu-btn"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    className="navigation-button"
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    id="menu-btn"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    className="navigation-button"
                    to="/projects"
                >
                    Projects
                </NavLink>
                <NavLink
                    id="menu-btn"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    className="navigation-button"
                    to="/contact"
                >
                    Contact
                </NavLink>
            </nav>
        </>
    );
}
