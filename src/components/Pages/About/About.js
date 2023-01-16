import React from "react";
import headShot from "../../../headshot-square.jpg";

import "./About.css";

export default function About() {
    return (
        <>
            <section>
                <img
                    id="headshot"
                    src={headShot}
                    alt="Jake Doherty head shot"
                />
                <article className="about-me-article">
                    <p className="about-me">
                        A Software Developer that gets excited at the prospect
                        of a new challenge and loves to produce clear and
                        consistent work. Enjoys using communication, teamwork,
                        and problem solving to find clean and concise solutions
                        to our problems. Keeps an open mind to best connect and
                        empathize with those around me. creating art, music,
                        functional objects, and opening the mind to different
                        viewpoints has instilled strong values of empathy,
                        compassion, and helpfulness. Consistently pushes
                        boundaries into new ventures in order to gain a better
                        world view.
                    </p>
                    <p className="my-view">
                        Every point of view is important, and can be learned
                        from no matter if one is in leadership or working the
                        ground floor. We can take influence from many things,
                        but it is up to us to bring them together and paint our
                        own picture.
                    </p>
                    <p className="skills-blurb">
                        <u>I am comfortable working with:</u>
                        <br />
                        <b>Languages: </b>
                        JavaScript, HTML, CSS, SQL
                        <br />
                        <b>Environments: </b>
                        Node.js
                        <br />
                        <b></b>
                        Frameworks: Express
                        <br />
                        <b>Libraries: </b>
                        React, Puppeteer
                        <br /> <b>Tools:</b> Git, Netlify, GitHub, Supabase, VS
                        Code, Postman, Beekeeper
                    </p>
                </article>
                <table className="skills-table">
                    <thead>
                        <tr>
                            <th colSpan={6}>I am comfortable working with:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="hidden"></th>
                            <th>Languages</th>
                            <th>Environments</th>
                            <th>Frameworks</th>
                            <th>Libraries</th>
                            <th>Tools</th>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td>JavaScript</td>
                            <td>Node.js</td>
                            <td>Express</td>
                            <td>React</td>
                            <td>Git</td>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td>HTML</td>
                            <td></td>
                            <td></td>
                            <td>Puppeteer</td>
                            <td>Netlify</td>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td>CSS</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>GitHub</td>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td>SQL</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Supabase</td>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>VS Code</td>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Postman</td>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Beekeeper</td>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Chrome Dev Tools</td>
                        </tr>
                        <tr>
                            <td className="hidden"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Google</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
