import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "pathseg";
import "./Home.css";
import initials from "../../../InitialsSinglePath.svg";
// import useScript from "../../../hooks/useScript.js";

export default function Home() {
    // useScript(
    //     "https://cdn.jsdelivr.net/npm/tsparticles-preset-links@2/tsparticles.preset.links.min.js"
    // );
    const options = useMemo(() => {
        return {
            detectRetina: false,
            fpsLimit: 30,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onDiv: {
                        enable: true,
                        ids: ["green-div", "white-div", "red-div"],
                        mode: "bubble",
                        type: ["rectangle", "char"],
                    },
                    resize: true,
                    onHover: {
                        enable: true,
                        mode: ["grab", "bubble"],
                    },
                },
                modes: {
                    bubble: {
                        distance: 200,
                        duration: 10,
                        opacity: 1,
                        size: 23,
                        divs: [
                            {
                                ids: "red-div",
                                color: "#ff0000",
                            },
                            {
                                ids: "white-div",
                                color: "#ffffff",
                            },
                            {
                                ids: "green-div",
                                color: "#00ff00",
                            },
                        ],
                    },
                    grab: {
                        distance: 200,
                        duration: 10,
                        opacity: 1,
                    },
                },
            },
            particles: {
                color: {
                    value: "#0ff",
                },
                links: {
                    blink: false,
                    color: {
                        value: ["#0ff"],
                    },
                    consent: false,
                    distance: 40,
                    enable: true,
                    opacity: 1,
                    width: 2,
                },
                move: {
                    attract: {
                        enable: false,
                        rotate: {
                            x: 600,
                            y: 1200,
                        },
                    },
                    bounce: false,
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                        area: 2000,
                    },
                    limit: 0,
                    value: 800,
                },
                opacity: {
                    animation: {
                        enable: false,
                        minimumValue: 0.05,
                        speed: 2,
                        sync: false,
                    },
                    random: false,
                    value: 0.5,
                },
                shape: {
                    character: [
                        {
                            fill: true,
                            font: "Font Awesome 5 Brands",
                            style: "",
                            value: [
                                "\uf179",
                                "\uf38b",
                                "\uf3b9",
                                "\uf13b",
                                "\uf1cb",
                            ],
                            weight: "400",
                        },
                        {
                            fill: true,
                            font: "Font Awesome 5 Free",
                            style: "",
                            value: [
                                "\uf06a",
                                "\uf7ba",
                                "\uf3ed",
                                "\uf55f",
                                "\uf013",
                            ],
                            weight: "900",
                        },
                    ],
                    type: ["char", "circle"],
                },
                size: {
                    animation: {
                        enable: false,
                        minimumValue: 0.1,
                        speed: 40,
                        sync: false,
                    },
                    random: false,
                    value: 0.5,
                },
            },
            polygon: {
                draw: {
                    enable: true,
                    background: {
                        color: "#000000",
                    },
                    lineColor: "rgba(0,255,255,0.2)",
                    lineWidth: 0.5,
                },
                move: {
                    radius: 5,
                },
                position: {
                    x: 30,
                    y: 30,
                },
                inlineArrangement: "equidistant",
                scale: 5,
                type: "inline",
                data: `${initials}`,
            },
        };
    }, []);
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
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
                <img className="initials" src={initials} alt="my-initials" />
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={options}
                />
            </div>
        </>
    );
}
