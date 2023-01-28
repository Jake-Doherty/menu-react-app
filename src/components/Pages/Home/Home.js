import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import options from "../../../particles-options-data.js";

import "./Home.css";

export default function Home() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
        await loadPolygonMaskPlugin(tsParticles);
        await tsParticles.load("tsparticles", options);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    );
}
