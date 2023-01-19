import React from "react";
import "./Main.css";

// Components
import Home from "../../Pages/Home/Home.js";
import About from "../../Pages/About/About.js";
import Projects from "../../Pages/Projects/Projects.js";
import Contact from "../../Pages/Contact/Contact.js";

export default function Main({ nav }) {
    const renderPageComponent = () => {
        if (nav === "home") {
            return <Home />;
        }
        if (nav === "about") {
            return <About />;
        }
        if (nav === "projects") {
            return <Projects />;
        }
        if (nav === "contact") {
            return <Contact />;
        }
    };

    return <main>{renderPageComponent()}</main>;
}
