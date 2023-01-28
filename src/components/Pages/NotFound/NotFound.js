import React, { useContext } from "react";
import Particles from "react-tsparticles";
import { ParticlesContext } from "../../../context/ParticlesContext.js";
import { useNotFoundParticles } from "../../../hooks/useNotFoundParticles.js";
import "./NotFound.css";

export default function NotFound() {
    const { particlesInit, particlesLoaded, particles, setParticles } =
        useContext(ParticlesContext);
    useNotFoundParticles(setParticles);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particles}
        />
    );
}
