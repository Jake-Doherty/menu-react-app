import initials from "./assets/InitialsSinglePath.svg";

const options = {
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
                pauseOnStop: false,
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
                distance: 25,
                lineLinked: {
                    opacity: 0.5,
                },
                radius: 330,
            },
            bubble: {
                delay: 1,
                distance: 50,
                duration: 2,
                opacity: 0.2,
                size: 10,
                shape: {
                    type: "circle",
                },
            },
        },
    },
    particles: {
        reduceDuplicates: true,
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
                    count: 0.5,
                    enable: false,
                    offset: 0,
                    speed: 50,
                    sync: true,
                },
            },
        },
        links: {
            enable: true,
            color: {
                value: [
                    "#ff0000",
                    "#ffa500",
                    "#ffff00",
                    "#008000",
                    "#0000ff",
                    "#4b0082",
                    "#ee82ee",
                ],
            },
            distance: 10,
            opacity: 1,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 0.5,
            straight: false,
            trail: {
                enable: true,
                fillColor: {
                    value: "none",
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
            value: 240,
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
                min: 0,
                max: 1,
            },
        },
        zIndex: {
            value: 100,
            random: {
                enable: true,
                minimumValue: 0,
            },
            anim: {
                enable: true,
                speed: 1,
                opacityMin: 0,
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
                opacity: 0.5,
            },
        },
        enable: true,
        inline: {
            arrangement: "equidistant",
        },
        move: {
            radius: 8,
            type: "inline",
        },
        scale: window.innerHeight * 0.0012,
        type: "inline",
        url: initials,
        position: {
            x: 50,
            y: 50,
        },
    },
};

export default options;
