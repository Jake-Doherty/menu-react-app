import React from "react";
import { Route, Routes } from "react-router";
import "./Main.css";

// Components
import Home from "../../Pages/Home/Home.js";
import About from "../../Pages/About/About.js";
import Projects from "../../Pages/Projects/Projects.js";
import Contact from "../../Pages/Contact/Contact.js";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}
