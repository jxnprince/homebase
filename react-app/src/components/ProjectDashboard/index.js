import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getProject, deleteProject } from '../../store/project';
import TeamMembersDisplay from "../TeamMembersDisplay";
import MessageBoard from '../MessageBoard'
import './ProjectDashboard.css'

const ProjectDashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {teamId, userId, projectId} = useParams()
    const project = useSelector(state => state.projects.project)
    let dateFormatted;

    useEffect(() => {
        dispatch(getProject(userId, projectId, teamId));
    }, [teamId, userId, projectId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let deletedProject = await dispatch(deleteProject(projectId));

        if (deletedProject) {
          history.push(`/users/${userId}/teams/${teamId}`);
        }
      };

    if(project){
        dateFormatted = project.project.dueDate.slice(5, 16)
    }


    return (
        <div className="team-dashboard-container">
            <div>
                <TeamMembersDisplay teamId={teamId} userId={userId}/>
                {project &&
                    <div className="project-info-container">
                        <h5 className="project-info-title">{project.project.projectTitle}</h5>
                        <p>{project.project.projectDescription}</p>
                        <p className="due-date">Due Date:</p>
                        <p className="project-due-date">{dateFormatted}</p>
                        <form onSubmit={handleSubmit}>
                            <button type="submit" className="project-delete-button">Delete Project</button>
                        </form>
                    </div>
                }
            </div>
            <div className="tasks-message-container">
                <h1 className="dashboard-title">Project Dashboard</h1>
                <div className="tasks-display-component">
                    <h1>Tasks</h1>
                    <div className="tasks-display-container">
                        <a href={`/users/${userId}/teams/${teamId}/projects/${projectId}/tasks/create`}>
                            <div className="task-container">
                                <h1>Create a Task</h1>
                            </div>
                        </a>
                        {project && project.tasks.map((task) => (
                        <a href={`/users/${userId}/teams/${teamId}/projects/${projectId}/tasks/${task.id}`}>
                            <div className="task-container">
                                <h1>{task.taskName}</h1>
                                <p>{task.taskBody}</p>
                                <p>Due: {task.dueDate.slice(5,16)}</p>
                            </div>
                        </a>
                        ))}
                    </div>
                </div>
                <MessageBoard />
            </div>
        </div>
    )

}

export default ProjectDashboard
