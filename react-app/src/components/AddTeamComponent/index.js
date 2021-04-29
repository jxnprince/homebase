import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { teamPost } from '../../store/team';

const AddTeamComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [teamName, setTeamName] = useState("");

  const handleSubmit= async (e) => {
    e.preventDefault();
    const payload = {
        teamName
      };
    await dispatch(teamPost(user.id, payload));
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
