import React, { useContext } from "react";
import Particles from "react-tsparticles";
import { ParticlesContext } from "../../../context/ParticlesContext.js";
import { useHomeParticles } from "../../../hooks/useHomeParticles.js";
import "./Home.css";

export default function Home() {
    const { particlesInit, particlesLoaded, particles, setParticles } =
        useContext(ParticlesContext);

    useHomeParticles(setParticles);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particles}
        />
    );
}
