import { createContext, useState, useCallback } from "react";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

const ParticlesContext = createContext();

const ParticlesProvider = ({ children }) => {
    const [particles, setParticles] = useState([]);

    const particlesInit = useCallback(
        async (engine) => {
            await loadFull(engine);
            await loadPolygonMaskPlugin(tsParticles);
            await tsParticles.load("tsparticles", particles);
        },
        [particles]
    );

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <ParticlesContext.Provider
            value={{ particles, setParticles, particlesInit, particlesLoaded }}
        >
            {children}
        </ParticlesContext.Provider>
    );
};

export { ParticlesContext, ParticlesProvider };
