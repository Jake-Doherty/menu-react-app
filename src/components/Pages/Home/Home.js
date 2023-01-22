import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
// import background from "../../../background.gif";
import "./Home.css";
// import initials from "../../../InitialsSinglePath.svg";

export default function Home() {
    const options = useMemo(() => {
        return {
            background: {
                color: {
                    value: "#000000",
                },
            },
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
                            value: "#000000",
                        },
                        width: 3.5,
                        opacity: {
                            random: {
                                enable: true,
                                animation: {
                                    enable: true,
                                    speed: 0.5,
                                    minimumValue: 0.1,
                                    sync: true,
                                },
                            },
                        },
                    },
                },
                enable: true,
                inline: {
                    arrangement: "equidistant",
                },
                move: {
                    radius: 15,
                    type: "path",
                },
                scale: 1.067,
                type: "inline",
                data: {
                    path: "M 229.50,253.25 C 229.12,254.38 228.75,259.00 228.75,263.62 228.75,268.25 227.63,282.12 226.25,294.50 223.38,320.62 223.00,336.00 225.38,339.25 227.25,341.75 232.63,341.00 235.25,337.87 236.50,336.25 236.25,335.62 233.88,333.62 233.88,333.62 231.12,331.38 231.12,331.38 231.12,331.38 232.50,312.88 232.50,312.88 235.50,272.00 236.38,256.00 235.62,253.62 234.63,250.75 230.62,250.50 229.50,253.25 Z M 251.50,37.50 C 245.50,41.75 241.50,48.25 235.50,63.25 220.38,100.75 201.12,167.25 189.25,223.12 184.75,244.25 181.62,249.25 171.38,251.37 162.00,253.25 152.38,252.12 145.62,248.12 135.25,242.12 133.00,231.12 140.50,222.88 144.88,217.88 145.12,215.00 141.25,215.00 137.88,215.00 130.25,224.12 129.25,229.38 126.25,245.50 142.00,260.12 162.62,260.38 169.12,260.38 169.75,260.62 168.50,262.38 163.25,269.12 146.62,287.88 141.00,293.38 141.00,293.38 134.38,299.75 134.38,299.75 134.38,299.75 107.50,296.75 107.50,296.75 65.38,291.75 53.50,292.25 42.75,299.25 34.38,304.62 31.38,316.62 36.12,326.88 45.88,348.38 71.50,354.38 98.38,341.38 109.00,336.25 125.62,324.38 135.75,314.75 135.75,314.75 142.12,308.75 142.12,308.75 142.12,308.75 151.25,310.00 151.25,310.00 162.75,311.62 171.25,313.75 171.25,315.00 171.25,315.62 169.25,328.00 166.88,342.75 150.38,444.75 144.75,521.88 152.00,546.25 154.38,554.25 155.75,556.25 158.88,556.25 162.88,556.25 163.88,552.25 161.75,544.88 158.75,534.88 160.00,488.25 164.25,451.75 168.50,415.25 181.38,325.88 183.25,320.25 183.62,319.00 185.12,319.38 189.63,321.75 194.75,324.62 195.75,324.88 197.25,323.25 199.63,320.88 198.62,319.50 191.25,315.38 187.75,313.50 185.00,311.25 185.00,310.50 185.00,307.12 195.25,254.25 196.00,253.50 196.50,253.00 202.00,250.00 208.12,246.88 237.13,232.00 274.88,201.62 294.62,177.12 294.62,177.12 298.38,172.37 298.38,172.37 298.38,172.37 294.88,187.12 294.88,187.12 283.62,233.87 275.88,286.88 268.12,370.62 260.25,455.25 253.00,502.88 245.00,520.88 240.50,531.00 236.38,526.62 229.38,504.38 224.50,488.88 217.13,457.12 215.00,441.50 213.38,430.88 210.88,426.75 206.75,428.38 202.88,429.88 202.75,433.25 206.25,453.12 210.13,475.50 212.00,483.25 218.38,503.12 225.38,524.75 229.63,531.75 237.88,534.88 246.00,538.00 253.12,530.25 258.62,512.25 266.88,485.12 272.25,449.62 280.62,365.00 288.25,290.00 293.88,249.00 303.25,201.25 308.38,174.75 311.25,164.00 317.00,150.25 321.75,138.87 322.12,133.00 318.38,130.75 315.62,129.12 314.50,130.37 303.88,146.88 289.38,169.50 269.38,190.50 239.25,214.50 226.25,224.87 202.63,240.50 201.62,239.50 201.38,239.25 204.38,234.50 208.12,228.87 239.50,183.50 265.00,128.87 273.25,90.00 276.50,74.75 276.50,48.62 273.25,42.12 268.88,33.25 260.00,31.37 251.50,37.50 Z M 263.75,44.38 C 266.12,47.25 266.75,62.12 265.00,73.87 261.50,98.62 253.62,121.25 237.50,154.38 226.38,177.25 206.00,212.50 205.25,210.25 204.25,207.12 229.63,112.62 240.00,81.25 247.25,58.87 251.50,49.87 256.38,45.62 260.75,42.00 261.62,41.88 263.75,44.38 Z M 176.12,288.12 C 174.25,298.38 172.62,307.00 172.50,307.25 172.50,307.50 172.00,307.25 171.25,306.88 170.62,306.50 165.50,305.12 159.88,303.88 159.88,303.88 149.62,301.75 149.62,301.75 149.62,301.75 158.88,291.75 158.88,291.75 164.00,286.38 170.62,278.88 173.62,275.25 176.62,271.62 179.25,268.87 179.38,269.00 179.50,269.25 178.12,277.75 176.12,288.12 Z M 101.00,305.00 C 114.38,306.25 125.50,307.50 125.75,307.75 126.50,308.50 105.25,325.50 98.38,329.50 87.38,336.00 80.25,338.12 70.00,338.12 58.00,338.00 51.50,334.88 46.12,326.62 41.38,319.00 41.25,312.38 45.75,308.12 52.38,302.00 64.12,301.38 101.00,305.00 Z",
                },

                position: {
                    x: 39.9,
                    y: 16.8,
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
