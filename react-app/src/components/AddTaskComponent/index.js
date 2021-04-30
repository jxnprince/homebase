import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom'
import { postTask } from '../../store/task';
import { getTeam } from '../../store/team';
// import DatePicker from "react-datepicker";

const AddTaskComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const team = useSelector(state => state.teams.team)
  const [taskName, setTaskName] = useState("");
  const [taskBody, setTaskBody] = useState("");
  let [dueDate, setDueDate] = useState("");
  // const [date, setDate] = useState(new Date());
  const [assignedUserId, setAssignedUserId] = useState("");
  const { projectId, teamId, taskId } = useParams();

  useEffect(() => {
        dispatch(getTeam(teamId, user.id));
    }, [teamId, user.id]);

  const handleSubmit= async (e) => {
    e.preventDefault();
    const payload = {
        taskName,
        taskBody,
        dueDate,
        assignedUserId
      };

    const createdTask = await dispatch(postTask(user.id, projectId, payload));

    if (createdTask) {
        history.push(`/users/${user.id}/teams/${teamId}/project/${projectId}/task/${taskId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='taskForm'>
        <label>Task Name</label>
        <input
          type="text"
          name="setTaskName"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          required>
        </input>
        <label>Description</label>
        <textarea
          type="text"
          name="setTaskBody"
          onChange={(e) => setTaskBody(e.target.value)}
          value={taskBody}
          required>
        </textarea>

        {/* <label>Due Date</label>
        <DatePicker
          type="text"
          name="setDueDate"
          onChange={(e) => setDueDate(e.target.value), setDate}
          value={ dueDate = date }
          required>
        </DatePicker> */}

        <label>assignedUserId</label>
        {/* <select
          type="text"
          name="setAssignedUserId"
          onChange={(e) => setAssignedUserId(e.target.value)}
          value={assignedUserId}
          required>
            {team && team.users.map((user)=>{
              return <option value={`${user.id}`}>{`${user.username}`}</option>
            })}
        </select> */}
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default AddTaskComponent;
