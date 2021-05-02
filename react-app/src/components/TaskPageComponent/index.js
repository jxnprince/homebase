import React, { useEffect } from "react";
import './TasksDisplay.css'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddTaskComponent from "../AddTaskComponent";
import { getTasks } from "../../store/task";



const MessageBoard = () => {
  const dispatch = useDispatch();
  const teamComments = useSelector((state) => state.comments.comments);
  const { projectId } = useParams();
  // const currentTeam = useSelector((state) => state.team.currentTeam);

  useEffect(() => {
    dispatch(getTasks(projectId));
  }, [projectId]);

    return (
        <div className="tasks-display-component">
            <h1>Projects</h1>
            <div className="tasks-display-container">
                { tasks && projectTasks.tasks.map((task) => (
                <a href={`/users/${userId}/teams/${project.teamId}/projects/${project.id}/tasks/${task.id}`}>
                    <div className="task-container">
                        <h3>{task.taskName}</h3>
                    </div>
                </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectsDisplay
