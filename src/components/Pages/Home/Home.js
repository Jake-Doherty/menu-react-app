import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
// import background from "../../../background.gif";
import "./Home.css";
import initials from "../../../InitialsSinglePath.svg";

export default function Home() {
    const options = useMemo(() => {
        return {
            fpsLimit: 120,
            autoPlay: true,
            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {
                        enable: true,
                        mode: ["trail"],
                    },
                    onHover: {
                        enable: true,
                        mode: ["bubble", "connect"],
                    },
                    resize: true,
                },
                modes: {
                    trail: {
                        modes: "none",
                        delay: 0.005,
                        quantity: 5,
                        pauseOnStop: true,
                        particles: {
                            shape: {
                                type: "circle",
                            },
                            color: {
                                value: "random",
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "destroy",
                                random: true,
                                speed: 4,
                                straight: false,
                            },
                            life: {
                                count: 1,
                                duration: {
                                    random: {
                                        enable: true,
                                        minimumValue: 0.1,
                                    },
                                    value: 0.5,
                                },
                            },
                        },
                        shape: {
                            type: "circle",
                        },
                    },
                    connect: {
                        distance: 30,
                        lineLinked: {
                            opacity: 0.5,
                        },
                        radius: 50,
                    },
                    grab: {
                        distance: 500,
                        lineLinked: {
                            opacity: 0.2,
                        },
                    },
                    bubble: {
                        delay: 1,
                        distance: 50,
                        duration: 2,
                        opacity: 0.2,
                        size: 20,
                        shape: {
                            type: "circle",
                        },
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                reduceDuplicates: true,
                destroy: {
                    mode: "split",
                    split: {
                        count: 1,
                        factor: {
                            random: {
                                enable: true,
                                minimumValue: 0.2,
                            },
                            value: 3,
                        },
                        rate: {
                            random: {
                                enable: true,
                                minimumValue: 0.2,
                            },
                            value: {
                                min: 4,
                                max: 9,
                            },
                        },
                        sizeOffset: true,
                    },
                },
                collisions: {
                    absorb: {
                        speed: 5,
                    },
                    overlap: {
                        enable: true,
                        retries: 1,
                    },
                    bounce: {
                        enable: true,
                        horizontal: {
                            random: {
                                enable: true,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        vertical: {
                            random: {
                                enable: true,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        mode: "bounce",
                    },
                },
                stroke: {
                    width: 2,
                    color: {
                        value: "random",
                    },
                },
                color: {
                    value: "random",
                    animation: {
                        h: {
                            count: 0,
                            enable: true,
                            offset: 0,
                            speed: 50,
                            sync: true,
                        },
                        s: {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 50,
                            sync: false,
                        },
                        l: {
                            count: 0,
                            enable: true,
                            offset: 0,
                            speed: 50,
                            sync: true,
                        },
                    },
                },
                links: {
                    enable: true,
                    color: "random",
                    distance: 10,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 0.5,
                    straight: false,
                    trail: {
                        enable: true,
                        fillColor: {
                            value: "#000000",
                        },
                        length: 10,
                        opacity: 1,
                    },
                    size: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 1000,
                    },
                    limit: 0,
                    value: 300,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: {
                        min: 1,
                        max: 3,
                    },
                },
                outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                },
                zIndex: {
                    value: 0,
                    random: {
                        enable: true,
                        minimumValue: 0,
                    },
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0,
                        sync: false,
                    },
                },
                zLayers: 100,
            },
            pauseOnOutsideViewport: true,
            polygon: {
                draw: {
                    enable: true,
                    stroke: {
                        color: {
                            value: "#FFFFFF",
                        },
                        width: 1,
                        opacity: 1,
                    },
                },
                enable: true,
                inline: {
                    arrangement: "equidistant",
                },
                move: {
                    radius: 20,
                    type: "path",
                },
                scale: 1.067,
                type: "inline",
                url: `${initials}`,
                position: {
                    x: 50,
                    y: 50,
                },
            },
        };
    }, []);

    const particlesInit = useCallback(
        async (engine) => {
            console.log("loading particles");
            console.log(engine);
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(engine);
            await loadPolygonMaskPlugin(tsParticles);
            await tsParticles.load("tsparticles", options);
            await console.log("loaded particles");
        },
        [options]
    );

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
