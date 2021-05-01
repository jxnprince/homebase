import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getTask, deleteTask} from '../../store/task';
import { AddTaskComponent } from '../AddTaskComponent'
import './singletask.css'

const SingleTaskPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { userId, teamId, projectId, taskId} = useParams()
    const task = useSelector(state => state.tasks.task)
    console.log(task)
    useEffect(() => {
        dispatch(getTask(taskId));
    }, [taskId, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let deletedTask = await dispatch(deleteTask(taskId));

        if (deletedTask) {
        history.push(`/users/${userId}/teams/${teamId}/projects/${projectId}`);
        }
    };

    return (
        <div className="single-task-container">
            {task && 
            <div>
                <h1>{task.taskName}</h1>
                <p>{task.taskBody}</p>
                <p>{task.dueDate}</p>
                <p>{task.assignedUserId}</p>
                <form>
                    <input type="checkbox" value={task.completed}></input>
                </form>
            </div>
            }
        </div>
    )

}

export default SingleTaskPage
