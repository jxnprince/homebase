import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeammates } from '../../store/team';


const TeamMembersDisplay = ({teamId, userId}) => {
    const dispatch = useDispatch();
    const teammates = useSelector(state => state.teams.teammates)

    useEffect(() => {
        dispatch(getTeammates(userId, teamId));
    }, [userId, teamId]);

    return (
        <div>
            {teammates && teammates.teammates.map((member) => (
                <div>
                    <p>{member}</p>
                </div>
            ))}
        </div>
    );
}

export default TeamMembersDisplay;
