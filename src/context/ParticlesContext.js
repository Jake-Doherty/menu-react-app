import { createContext, useState, useCallback } from "react";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

const ParticlesContext = createContext();

const ParticlesProvider = ({ children }) => {
    const [particles, setParticles] = useState([]);
    const [loadingParticles, setLoadingParticles] = useState(true);

    const particlesInit = useCallback(
        async (engine) => {
            try {
                await Promise.all([
                    loadFull(engine),
                    loadPolygonMaskPlugin(tsParticles),
                ]);
                tsParticles.load("tsparticles", particles);
            } catch (e) {
                console.error(e);
            }
        },
        [particles]
    );

    const particlesLoaded = useCallback(async (container) => {}, []);

    return (
        <ParticlesContext.Provider
            value={{
                particles,
                setParticles,
                particlesInit,
                particlesLoaded,
                loadingParticles,
                setLoadingParticles,
            }}
        >
            {children}
        </ParticlesContext.Provider>
    );
};

export { ParticlesContext, ParticlesProvider };
