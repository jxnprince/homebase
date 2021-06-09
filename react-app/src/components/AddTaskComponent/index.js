import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom'
import { postTask } from '../../store/task';
import { getTeam } from '../../store/team';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import "./taskForm.css"

const AddTaskComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const team = useSelector(state => state.teams.team)
  const [taskName, setTaskName] = useState("");
  const [taskBody, setTaskBody] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState([]);
  const [assignedUserId, setAssignedUserId] = useState("");
  const { projectId, teamId } = useParams();

  useEffect(() => {
        dispatch(getTeam(user.id, teamId, dispatch));
    }, [user.id, teamId, dispatch]);

  useEffect(()=>{
    if (!!team)setAssignedUserId(!!team.users && team.users.length > 0 ? team.users[0].id : "")
  },[team])

  const handleSubmit= async (e) => {
    e.preventDefault();
    const payload = {
        taskName,
        taskBody,
        dueDate,
        assignedUserId
      };
      const createdTask = await dispatch(postTask(projectId, payload));
    if (createdTask) history.push(`/users/${user.id}/teams/${teamId}/projects/${projectId}`)
    // } else if (createdTask.errors) {
    //   setErrors(createdTask.errors)
    // }
  };

  return (
    <div className="add-task-page">
        <form onSubmit={handleSubmit} className='taskForm'>
        <div className="add-task-container">
            <h4 className="create-task-title">Create Task</h4>
            <label className="add-task-label">Task Name</label>
            <input
                // placeholder='Task Name'
                className="add-task-input"
                type="text"
                name="setTaskName"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
                required>
            </input>
            <label className="add-task-label">Description</label>
            <textarea
                // placeholder='Description'
                type="text"
                className="add-task-description"
                name="setTaskBody"
                onChange={(e) => setTaskBody(e.target.value)}
                value={taskBody}>
            </textarea>
            <label className="add-task-label">Due Date</label>
            <input
                placeholder='YYYY-MM-DD'
                type="text"
                id="task-due-date-input"
                className="add-task-input"
                name="setDueDate"
                onChange={(e) => setDueDate(e.target.value)}
                value={dueDate}
                required>
            </input>
            {/* <DatePicker
            type="date"
            name="setDueDate"
            selected={dueDate}
            onChange={dueDate => setDueDate(dueDate)}
            value={ dueDate }
            required /> */}
            <label className="add-task-label">Assigned User</label>
            <select
                placeholder="Assign Team-member"
                type="text"
                className="add-task-person"
                name="setAssignedUserId"
                onChange={(e) => setAssignedUserId(e.target.value)}
                value={assignedUserId}
                required>
                {team && team.users.map((user)=>{
                return <option key={user.id} value={user.id}>{user.username}</option>
                })}
            </select>
        <button type="submit" className="new-task-submit">Create Task</button>
        </div>
        </form>
    </div>
  );
};

export default AddTaskComponent;
