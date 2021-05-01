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

  const handleSubmit= async (e) => {
    e.preventDefault();
    const payload = {
        taskName,
        taskBody,
        dueDate,
        assignedUserId
      };
      const createdTask = await dispatch(postTask(projectId, payload));
    if (createdTask) history.push(`/users/${user.id}/teams/${teamId}/project/${projectId}`)
    // } else if (createdTask.errors) {
    //   setErrors(createdTask.errors)
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='taskForm'>
        <label>Task Name</label>
        <input
          placeholder='Task Name'
          type="text"
          name="setTaskName"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          required>
        </input>
        <label>Description</label>
        <textarea
          placeholder='Description'
          type="text"
          name="setTaskBody"
          onChange={(e) => setTaskBody(e.target.value)}
          value={taskBody}>
        </textarea>
        <label>Due Date</label>
          <input
          placeholder='Due Date'
          type="text"
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
        <label>Assigned User</label>
        <select
          placeholder="Assign Team-member"
          type="text"
          name="setAssignedUserId"
          onChange={(e) => setAssignedUserId(e.target.value)}
          value={assignedUserId}
          required>
            {/* {team && team.users.map((user)=>{
              return <option key={user.id} value={`${user.id}`}>{`${user.username}`}</option>
            })} */}
        </select>
      <button type="submit">Create Task</button>
      </div>
    </form>
  );
};

export default AddTaskComponent;
