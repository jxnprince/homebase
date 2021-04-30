import React, { useEffect } from "react";
import AddTeamComponent from '../AddTeamComponent'

const TeamsDisplay = ({teams, userId}) => {
    return (
        <div>
            <AddTeamComponent />
            {teams && teams.teams.map((team) => (
                <a href={`/users/${userId}/teams/${team.id}`}>
                    <div>
                        <h1>{team.teamName}</h1>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default TeamsDisplay
