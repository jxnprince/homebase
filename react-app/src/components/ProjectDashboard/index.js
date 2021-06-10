import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getProject, deleteProject } from '../../store/project';
import { deleteTask, completeTask } from '../../store/task';
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

    const handleDelete = async (e, taskId) => {
        e.preventDefault();

        let deletedTask = await dispatch(deleteTask(taskId));

        if (deletedTask) {
            dispatch(getProject(userId, projectId, teamId));
        }
    };

    const handleComplete = async (e, taskId) => {
        e.preventDefault();

        await dispatch(completeTask(taskId));

        dispatch(getProject(userId, projectId, teamId));
    };

    if(project){
        dateFormatted = project.project.dueDate.slice(5, 16)
    }


    return (
        <div className="team-dashboard-container">
            <div>
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
                <TeamMembersDisplay teamId={teamId} userId={userId}/>
            </div>
            <div className="tasks-message-container">
                <div className="tasks-display-component">
                    <h1>Tasks</h1>
                    <div className="tasks-display-container">
                        <a href={`/users/${userId}/teams/${teamId}/projects/${projectId}/tasks/create`}>
                            <div className="task-containe">
                                <h3>Create a Task</h3>
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                        {project && project.tasks.map((task) => (
                            <div className="task-container">
                                <h3>{task.taskName}</h3>
                                <p className="task-info">Due: {task.dueDate.slice(5,16)}</p>
                                <p className="task-info">{task.taskBody}</p>
                                <p className="task-info">Completed: {task.completed.toString()}</p>
                                <div className="delete-and-complete">
                                    <form onSubmit={(e) => handleDelete(e, task.id)}>
                                        <button className="delete-task">Delete Task</button>
                                    </form>
                                    <button onClick={(e) => handleComplete(e, task.id)} className="completed">
                                        <i className="far fa-check-circle" ></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <MessageBoard />
            </div>
        </div>
    )

}

export default ProjectDashboard
