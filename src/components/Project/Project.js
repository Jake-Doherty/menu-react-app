import React from "react";
import "./Project.css";

export default function Project(props) {
    const contributors = [...props.contributors];

    return (
        <>
            <li className="project">
                <div className="project-name-image-container">
                    <img
                        className="project-image"
                        src={`/project-images/${props.projectImage}.png`}
                        alt={props.name}
                    />
                    <div>
                        <h3 className="project-name">{props.name}</h3>
                        <div className="anchor-flexbox">
                            <a
                                className="project-anchors"
                                href={props.projectUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Site
                            </a>
                            <span> | </span>
                            <a
                                className="project-anchors"
                                href={props.repoUrl}
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
                </div>
                <p className="about-project">{props.about}</p>
            </li>
        </>
    );
}
