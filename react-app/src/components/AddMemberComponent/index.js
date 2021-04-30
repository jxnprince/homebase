import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { memberPost, getTeammates } from '../../store/team';


const AddMemberComponent = () => {
    const dispatch = useDispatch();
    const [teamMember, setTeamMember] = useState("");
    const {teamId, userId} = useParams()

    const handleSubmit= async (e) => {
      e.preventDefault();
      const payload = {
          teamMember
        };
      await dispatch(memberPost(userId, teamId, payload));

      dispatch(getTeammates(userId, teamId))
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter username of desired team member:</label>
          <input
            type="text"
            name="teamMember"
            onChange={(e) => setTeamMember(e.target.value)}
            value={teamMember}
            required
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
    );
  };

  export default AddMemberComponent;
