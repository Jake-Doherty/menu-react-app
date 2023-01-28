import React from "react";
import { Route, Routes } from "react-router";
import "./Main.css";

// Components
import Home from "../../Pages/Home/Home.js";
import About from "../../Pages/About/About.js";
import Projects from "../../Pages/Projects/Projects.js";
import Contact from "../../Pages/Contact/Contact.js";
import NotFound from "../../Pages/NotFound/NotFound.js";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}
