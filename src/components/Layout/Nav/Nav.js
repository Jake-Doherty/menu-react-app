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
            </nav>
        </>
    );
}
