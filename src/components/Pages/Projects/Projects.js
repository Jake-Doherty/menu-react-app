import React from "react";
import "./Projects.css";
import { projects } from "../../../projects-data.js";
import Project from "../../Project/Project.js";

export default function Projects() {
    return (
        <>
            <section className="projects-section">
                <ul className="projects-list">
                    {projects.map((project) => {
                        return (
                            <Project
                                key={project.projectName}
                                name={project.projectName}
                                projectUrl={project.deployedUrl}
                                repoUrl={project.repoUrl}
                                projectImage={project.projectImage}
                                about={project.projectAbout}
                                contributors={project.projectContributors}
                            />
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
