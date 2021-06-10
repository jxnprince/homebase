import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { memberPost, getTeammates } from '../../store/team';
import './AddMember.css'


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
      <form onSubmit={handleSubmit} className="add-member-form">
        <div className="add-member-container">
          <label className="add-member-label">Add team member:</label>
          <input
            type="text"
            className="new-member-input"
            name="teamMember"
            onChange={(e) => setTeamMember(e.target.value)}
            value={teamMember}
            placeholder={`New Member's name`}
            required
          ></input>
          <button type="submit" className="new-member-submit">Add User</button>
        </div>
      </form>
    );
  };

  export default AddMemberComponent;
