import React, { useEffect } from "react";
import AddTeamComponent from '../AddTeamComponent'
import './TeamsDisplay.css'


const TeamsDisplay = ({teams, userId}) => {
    return (
        <div className="teams-display-component">
            <h1>Teams</h1>
            <div className="teams-display-container">
                <AddTeamComponent />
                {teams && teams.teams.map((team) => (
                    <a href={`/users/${userId}/teams/${team.id}`}>
                        <div className="team-container">
                            <h1>{team.teamName}</h1>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default TeamsDisplay
