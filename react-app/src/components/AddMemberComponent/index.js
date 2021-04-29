import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { memberPost } from '../../store/team';


const AddMemberComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [memberUsername, setMemberUsername] = useState("");
    const {teamId} = useParams()

    const handleSubmit= async (e) => {
      e.preventDefault();
      const payload = {
          memberName
        };
      await dispatch(memberPost(user.id, teamId, payload));
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter username of desired team member.</label>
          <input
            type="text"
            name="setTeamName"
            onChange={(e) => setTeamName(e.target.value)}
            value={memberName}
            required
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
    );
  };

  export default AddMemberComponent;
