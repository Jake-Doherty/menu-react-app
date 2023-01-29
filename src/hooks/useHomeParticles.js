import { useEffect } from "react";
import options from "../data/home-particle-options-data.js";

export function useHomeParticles(setParticles) {
    useEffect(() => {
        const getHomeParticleOptions = async () => {
            const particleOptions = options;
            setParticles(particleOptions);
        };
        getHomeParticleOptions();
    }, [setParticles]);
}
