import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getTeam, deleteTeam } from '../../store/team';
import AddMemberComponent from '../AddMemberComponent'
import TeamMembersDisplay from "../TeamMembersDisplay";
import './TeamDashboard.css'

const TeamDashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {teamId, userId} = useParams()
    const team = useSelector(state => state.teams.team)

    useEffect(() => {
        dispatch(getTeam(userId, teamId));
    }, [teamId, userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let deletedTeam = await dispatch(deleteTeam(userId, teamId));

        if (deletedTeam) {
          history.push(`/users/${userId}/teams`);
        }
      };

    return (
        <div>
            {team &&
                <div>
                    <div>
                        <TeamMembersDisplay teamId={teamId} userId={userId}/>
                    </div>
                    <div>
                        <h1>{team.teamName}</h1>
                        <AddMemberComponent />
                        <form onSubmit={handleSubmit}>
                            <button type="submit">Delete Team</button>
                        </form>
                    </div>
                </div>
            }
            <div className="projects-display-component">
                <h1>Projects</h1>
                <div className="projects-display-container">
                    {team && team.projects.map((project) => (
                        <a href={`/users/${userId}/teams/${project.teamId}/projects/${project.id}`}>
                            <div className="project-container">
                                <h1>{project.projectTitle}</h1>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default TeamDashboard
