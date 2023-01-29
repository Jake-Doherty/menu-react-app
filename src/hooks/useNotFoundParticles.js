import { useEffect } from "react";
import notFoundOptions from "../not-found-particle-options-data.js";

export function useNotFoundParticles(setParticles) {
    useEffect(() => {
        const getNotFoundParticleOptions = async () => {
            const particleOptions = notFoundOptions;
            setParticles(particleOptions);
        };
        getNotFoundParticleOptions();
    }, [setParticles]);
}
