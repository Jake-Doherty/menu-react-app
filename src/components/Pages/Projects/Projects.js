import React from "react";
import "./Projects.css";
import { projects } from "../../../data/projects-data.js";
import Project from "./Project/Project.js";

export default function Projects() {
    return (
        <>
            <section className="projects-section">
                <ul className="projects-list">
                    {projects.map(
                        ({
                            projectName,
                            deployedUrl,
                            repoUrl,
                            projectImage,
                            projectAbout,
                            projectContributors,
                        }) => {
                            return (
                                <Project
                                    key={projectName}
                                    {...{
                                        projectName,
                                        deployedUrl,
                                        repoUrl,
                                        projectImage,
                                        projectAbout,
                                        projectContributors,
                                    }}
                                />
                            );
                        }
                    )}
                </ul>
            </section>
        </>
    );
}
