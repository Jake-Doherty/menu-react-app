import React from "react";
import "./Project.css";

export default function Project({
    projectName,
    deployedUrl,
    repoUrl,
    projectImage,
    projectAbout,
    projectContributors,
}) {
    const contributors = [...projectContributors];

    return (
        <>
            <li className="project">
                <img
                    className={`project-image ${projectImage}`}
                    // src/assets/project-images/dummies-logo.png
                    src={`/project-images/${projectImage}.png`}
                    alt={projectName}
                />
                <div>
                    <h3 className="project-name">{projectName}</h3>
                    <div className="anchor-flexbox">
                        <a
                            className="project-anchors"
                            href={deployedUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Site
                        </a>
                        <span> | </span>
                        <a
                            className="project-anchors"
                            href={repoUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo
                        </a>
                    </div>
                    <div className="contributors-container">
                        <p className="contributor-p">
                            {contributors.map((contributor, i) => {
                                if (contributors.length - 1 === i) {
                                    return contributor;
                                } else {
                                    return `${contributor}, `;
                                }
                            })}
                        </p>
                    </div>
                </div>
                <p className="about-project">{projectAbout}</p>
            </li>
        </>
    );
}
