import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getTeams } from '../../store/team';
import { getUserProjects } from '../../store/project';
import TeamsDisplay from '../TeamsDisplay'
import ProjectsDisplay from '../ProjectsDisplay'

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
        <div>
            <h1>User Dashboard</h1>
            {user &&
                <div>
                    <img src={user.user_avatar}></img>
                    <p>{user.firstname} {user.lastname}</p>
                    <p>{user.username}</p>
                </div>
            }
            {teams && userProjects &&
                <div>
                <TeamsDisplay teams={teams} userId={userId}/>
                <ProjectsDisplay userProjects={userProjects} userId={userId}/>
                </div>
            }
        </div>
    )

}

export default UserDashboard
