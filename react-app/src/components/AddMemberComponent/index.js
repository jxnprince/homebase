import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { memberPost } from '../../store/team';


const AddMemberComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [teamMember, setTeamMember] = useState("");
    const {teamId} = useParams()

    const handleSubmit= async (e) => {
      e.preventDefault();
      const payload = {
          teamMember
        };
      await dispatch(memberPost(user.id, teamId, payload));
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
