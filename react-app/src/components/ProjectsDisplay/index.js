import React, { useEffect } from "react";


const ProjectsDisplay = ({userProjects, userId}) => {

    return (
        <div>
            {userProjects && userProjects.userProjects.map((project) => (
            <a href={`/users/${userId}/teams/${project.teamId}/projects/${project.id}`}>
                <div>
                    <h1>{project.projectTitle}</h1>
                </div>
            </a>
            ))}
        </div>
    );
}

export default ProjectsDisplay
