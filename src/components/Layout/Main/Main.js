import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./Main.css";

// Components
import About from "../../Pages/About/About.js";
import Projects from "../../Pages/Projects/Projects.js";
import Contact from "../../Pages/Contact/Contact.js";
import NotFound from "../../Pages/NotFound/NotFound.js";
import { useStarScape } from "../../../hooks/useStarScape.js";
import Home from "../../Pages/Home/Home.js";

export default function Main() {
    const { starScape } = useStarScape();

    useEffect(() => {
        window.addEventListener("load", starScape());
        return () => {
            window.removeEventListener("load", starScape());
        };
    }, [starScape]);

    // starScape();

    return (
        <main>
            <canvas id="canvas"></canvas>
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
