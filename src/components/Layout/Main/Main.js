import React from "react";
import { Route, Routes } from "react-router";
import "./Main.css";

// Components
import Home from "../../Pages/Home/Home.js";
import About from "../../Pages/About/About.js";
import Projects from "../../Pages/Projects/Projects.js";
import Contact from "../../Pages/Contact/Contact.js";
import NotFound from "../../Pages/NotFound/NotFound.js";
import { useStarScape } from "../../../hooks/useStarScape.js";

export default function Main() {
    const { starScape } = useStarScape();

    function componentDidMount() {
        window.addEventListener("load", starScape);
    }

    componentDidMount();

    return (
        <main>
            <canvas id="canvas"></canvas>
            <Routes>
                <Route exact path="/" element={<Home {...{ starScape }} />} />
                <Route
                    exact
                    path="/about"
                    element={<About {...{ starScape }} />}
                />
                <Route
                    exact
                    path="/projects"
                    element={<Projects {...{ starScape }} />}
                />
                <Route
                    exact
                    path="/contact"
                    element={<Contact {...{ starScape }} />}
                />
                <Route path="*" element={<NotFound {...{ starScape }} />} />
            </Routes>
        </main>
    );
}
