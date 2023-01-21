import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import "pathseg";
import "./Home.css";
import initials from "../../../InitialsSinglePath.svg";
import usePathSegScript from "../../../hooks/useScript.js";

export default function Home() {
    usePathSegScript(
        "https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"
    );

    const options = useMemo(() => {
        return {
            detectRetina: false,
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onHover: {
                        enable: true,
                        mode: ["bubble", "grab"],
                    },
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 100,
                        lineLinked: {
                            opacity: 1,
                        },
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                        strength: 2,
                    },
                    push: {
                        quantity: 4,
                        size: 6,
                    },
                    bubble: {
                        distance: 40,
                        duration: 2,
                        opacity: 8,
                        size: 10,
                        speed: 3,
                    },
                },
            },
            particles: {
                color: {
                    value: "random",
                    animation: {
                        enable: true,
                        speed: 20,
                        sync: true,
                    },
                },
                lineLinked: {
                    blink: false,
                    color: "random",
                    consent: true,
                    distance: 75,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    attract: {
                        enable: false,
                        rotate: {
                            x: 600,
                            y: 1200,
                        },
                    },
                    bounce: true,
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: false,
                    speed: 0.5,
                    straight: false,
                    slow: {
                        radius: 0,
                        enable: true,
                        strength: 20,
                    },
                },
                number: {
                    density: {
                        enable: true,
                        area: 2000,
                    },
                    limit: 0,
                    value: 200,
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0.5,
                        speed: 0.05,
                        sync: false,
                    },
                    random: false,
                    value: 1,
                },
                shape: {
                    type: ["circle", "square", "polygon", "triangle"],
                },
                size: {
                    animation: {
                        enable: true,
                        minimumValue: 2,
                        maximumValue: 6,
                        speed: 2,
                        sync: false,
                    },
                    random: true,
                    value: 6,
                },
            },
            polygon: {
                enable: true,
                draw: {
                    enable: true,
                    lineColor: "rgba(255,255,255,0.2)",
                    lineWidth: 1,
                },
                move: {
                    radius: 10,
                },
                inlineArrangement: "equidistant",
                scale: 1,
                type: "inline",
                url: `${initials}`,
            },
        };
    }, []);
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        require("pathseg");
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <>
            <div className="welcome-div">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={options}
                />
                <img className="initials" src={initials} alt="my-initials" />
            </div>
        </>
    );
}
