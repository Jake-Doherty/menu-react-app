import React from "react";
import "./Project.css";

export default function Project(props) {
    return (
        <>
            <li className="project">
                <img src={`${props.projectImage}`} alt={props.name} />
                <h3 className="project-name">{props.name}</h3>
                <a className="deployed-site" href={props.projectUrl}>
                    Deployed Site
                </a>
                <a className="repo" href={props.repoUrl}>
                    Github Repo
                </a>
                <p className="about-project">{props.about}</p>
                <p>{props.contributors}</p>
            </li>
        </>
    );
}
