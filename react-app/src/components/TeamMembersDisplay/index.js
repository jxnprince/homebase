import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeammates } from '../../store/team';
import './TeamMembersDisplay.css'


const TeamMembersDisplay = ({teamId, userId}) => {
    const dispatch = useDispatch();
    const teammates = useSelector(state => state.teams.teammates)

    useEffect(() => {
        dispatch(getTeammates(userId, teamId));
    }, [userId, teamId]);

    return (
        <div className="team-members-container">
            <h5>Team Members:</h5>
            {teammates && teammates.teammates.map((member) => (
                <div>
                    <p>{member}</p>
                </div>
            ))}
        </div>
    );
}

export default TeamMembersDisplay;
