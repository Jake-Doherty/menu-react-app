import React, { useContext, useEffect } from "react";
import Particles from "react-tsparticles";
import { ParticlesContext } from "../../../context/ParticlesContext.js";
import { useHomeParticles } from "../../../hooks/useHomeParticles.js";
import "./InitialParticles.css";

export default function InitialParticles() {
    const {
        particlesInit,
        particles,
        setParticles,
        setLoadingParticles,
        particlesLoaded,
    } = useContext(ParticlesContext);

    useEffect(() => {
        setLoadingParticles(true);
        const timeout = setTimeout(() => {
            setLoadingParticles(false);
        }, 1500);
        return () => clearTimeout(timeout);
    }, [setLoadingParticles]);

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
