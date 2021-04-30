import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { teamPost } from '../../store/team';
import './AddTeam.css'

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
      <div className="add-team-form">
        <label className="add-team-label">Team Name:</label>
        <input
          type="text"
          name="setTeamName"
          className="add-team-input"
          onChange={(e) => setTeamName(e.target.value)}
          value={teamName}
          required
        ></input>
        <button type="submit" className="add-team-submit">Create Team</button>
      </div>
    </form>
  );
};

export default AddTeamComponent;
