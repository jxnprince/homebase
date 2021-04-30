import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { teamPost } from '../../store/team';

const AddTeamComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [teamName, setTeamName] = useState("");

  const handleSubmit= async (e) => {
    e.preventDefault();
    const payload = {
        teamName
      };

    let createdTeam = await dispatch(teamPost(user.id, payload));

    if (createdTeam) {
        history.push(`/users/${user.id}/teams/${createdTeam.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Team Name</label>
        <input
          type="text"
          name="setTeamName"
          onChange={(e) => setTeamName(e.target.value)}
          value={teamName}
          required
        ></input>
      </div>
      <button type="submit">Create Team</button>
    </form>
  );
};

export default AddTeamComponent;
