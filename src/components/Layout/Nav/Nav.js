import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <>
            <nav id="nav-container" className="nav-collapse">
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
                {/* <div className="menu-button-container">
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
                </ul> */}
            </nav>
        </>
    );
}
