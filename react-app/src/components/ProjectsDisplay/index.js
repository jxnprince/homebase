import React, { useEffect } from "react";
import './ProjectsDisplay.css'


const ProjectsDisplay = ({userProjects, userId}) => {

    return (
        <div className="projects-display-component">
            <h1>Projects</h1>
            <div className="projects-display-container">
                {userProjects && userProjects.userProjects.map((project) => (
                <a href={`/users/${userId}/teams/${project.teamId}/projects/${project.id}`}>
                    <div className="project-container">
                        <h1>{project.projectTitle}</h1>
                    </div>
                </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectsDisplay
