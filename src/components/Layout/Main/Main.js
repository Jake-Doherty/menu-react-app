import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Main.css";

// background from https://upload.wikimedia.org/wikipedia/commons/e/e4/StarfieldSimulation.gif
import background from "../../../background.gif";

// Components
import Home from "../../Pages/Home/Home.js";
import About from "../../Pages/About/About.js";
import Projects from "../../Pages/Projects/Projects.js";
import Contact from "../../Pages/Contact/Contact.js";

export default function Main() {
    return (
        <main
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}
