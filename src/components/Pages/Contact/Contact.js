import React from "react";
import "./Contact.css";

import linkedin from "../../../assets/social-icons/linkedin.png";
import github from "../../../assets/social-icons/github-sign.png";

export default function Contact() {
    return (
        <>
            <section className="contact-section">
                <div className="social-container">
                    <a
                        href="https://www.linkedin.com/in/jacob-doherty1/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            id="linkedin-icon"
                            className="social-icon"
                            src={linkedin}
                            alt="social-icon"
                        />
                    </a>
                </div>
                <div className="social-container">
                    <a
                        href="https://github.com/Jake-Doherty"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            id="github-icon"
                            className="social-icon"
                            src={github}
                            alt="social-icon"
                        />
                    </a>
                </div>
            </section>
        </>
    );
}
