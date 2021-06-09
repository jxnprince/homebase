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

      const dateFormatter = (date) =>{
    let arr = date.split(' ')
    let dayArr = [arr[3][2], arr[3][3]]
    let timeArr = arr[4].split(':')
    let timeAttForm = [timeArr[1],timeArr[2]]
    let newArr = [arr[0], arr[1], arr[2], dayArr.join(''), timeAttForm.join(':')]
    date = newArr.join(' ')
    return date
  }

    return (
        <div id='single-class-page'>
            <div className="single-task-container">
                {task && 
                <div>
                    <h3 id='single-task-name'>{task.taskName}</h3>
                    <p id='single-task-body'>{task.taskBody}</p>
                    <p id='single-task-date'>Due: {dateFormatter(task.dueDate)}</p>
                    <form onSubmit={handleSubmit}>
                        <button>Delete Task</button>
                        <input type="checkbox" value={task.completed}></input>
                    </form>
            </div>
            }
        </div>
        </div>
    )

}

export default SingleTaskPage
