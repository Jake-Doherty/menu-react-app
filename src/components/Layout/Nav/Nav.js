import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    const handleNavToggle = () => {
        const navToggleBtn = document.getElementById("nav-toggle-btn");
        const navContainer = document.getElementById("nav-container");
        const middleBtnLine = document.getElementById("middle-btn-line");
        navContainer.classList.toggle("nav-collapse");
        navContainer.classList.toggle("nav-open");
        navToggleBtn.classList.toggle("toggle-btn-open");
        navToggleBtn.classList.toggle("toggle-btn-close");
        middleBtnLine.classList.toggle("btn-line-middle");
    };

    return (
        <>
            <nav id="nav-container" className="nav-collapse">
                <div
                    onClick={handleNavToggle}
                    className="toggle-btn-open"
                    id="nav-toggle-btn"
                >
                    <span className="btn-line"></span>
                    <span
                        id="middle-btn-line"
                        className="btn-line btn-line-middle"
                    ></span>
                    <span className="btn-line"></span>
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
