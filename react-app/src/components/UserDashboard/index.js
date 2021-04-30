import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getTeams } from '../../store/team';
import { getUserProjects } from '../../store/project';
import TeamsDisplay from '../TeamsDisplay'
import ProjectsDisplay from '../ProjectsDisplay'
import './UserDashboard.css'

const UserDashboard = () => {
    const dispatch = useDispatch();
    const {userId} = useParams()
    const user = useSelector(state => state.session.user);
    const teams = useSelector(state => state.teams.teams)
    const userProjects = useSelector(state => state.projects.userProjects)

    useEffect(() => {
        dispatch(getTeams(userId));
        dispatch(getUserProjects(userId));
    }, [userId]);

    return (
        <div className="user-dashboard-container">
            <div className="user-info-container">
                {user &&
                    <div className="user-info-inner-container">
                        <img src={user.user_avatar} className="user-avatar"></img>
                        <p className="user-details">{user.firstname} {user.lastname}</p>
                        <p className="user-details">{user.username}</p>
                    </div>
                }
            </div>
            <div className="team-projects-container">
                <h1 className="dashboard-title">User Dashboard</h1>
                {teams && userProjects &&
                    <div>
                    <TeamsDisplay teams={teams} userId={userId}/>
                    <ProjectsDisplay userProjects={userProjects} userId={userId}/>
                    </div>
                }
            </div>
        </div>
    )

}

export default UserDashboard
