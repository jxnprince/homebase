import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/team';

const TeamForm = () => {
  const dispatch = useDispatch();
  const [teamName, setTeamName] = useState("");
  const [search, setSearch] = useState('')

  return (
    <form onSubmit={}>
      <div>
        <label>Team Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className="search-container">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search books"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
        </form>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default TeamForm;
