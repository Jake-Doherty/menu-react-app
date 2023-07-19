import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { Link } from "@mui/material";

export default function Nav() {
    const [isActive, setIsActive] = useState(false);
    const handleNavToggle = () => {
        const navToggleBtn = document.getElementById("nav-toggle-btn");
        const navContainer = document.getElementById("nav-container");
        navContainer.classList.toggle("nav-collapse");
        navContainer.classList.toggle("nav-open");
        navToggleBtn.classList.toggle("toggle-btn-open");
        navToggleBtn.classList.toggle("toggle-btn-close");
    };

    const navigate = useNavigate();

    const type = window.location.pathname;

    useEffect(() => {
        switch (type) {
            case "/":
                setIsActive(true);
                break;
            case "/about":
                setIsActive(true);
                break;
            case "/projects":
                setIsActive(true);
                break;
            case "/contact":
                setIsActive(true);
                break;
            default:
                setIsActive(false);
                break;
        }
    }, [type]);

    const handleNavigate = (e) => {
        console.log(e.target.textContent);
        switch (e.target.textContent) {
            case "Home":
                navigate("/");
                break;
            case "About":
                navigate("/about");
                break;
            case "Projects":
                navigate("/projects");
                break;
            case "Contact":
                navigate("/contact");

                break;
            default:
                break;
        }
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

                <Link
                    id="menu-btn"
                    underline={isActive ? "always" : "hover"}
                    sx={{
                        color: isActive ? "red" : "white",
                    }}
                    className="navigation-button"
                    // to="/"
                    onClick={handleNavigate}
                >
                    Home
                </Link>
                <Link
                    id="menu-btn"
                    className="navigation-button"
                    sx={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    onClick={handleNavigate}
                >
                    About
                </Link>
                <Link
                    id="menu-btn"
                    className="navigation-button"
                    sx={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    onClick={handleNavigate}
                >
                    Projects
                </Link>
                <Link
                    id="menu-btn"
                    className="navigation-button"
                    sx={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                    })}
                    onClick={handleNavigate}
                >
                    Contact
                </Link>
            </nav>
        </>
    );
}
