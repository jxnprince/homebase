const ADD_TEAM = "team/ADD_TEAM";
const REMOVE_TEAM = "team/REMOVE_TEAM";
const LOAD_TEAMS = "team/LOAD_TEAMS";
const LOAD_TEAM = "team/LOAD_TEAM"

const addTeam = (team) => ({
    type: ADD_TEAM,
    payload: team
})

const removeTeam = () => ({
    type: REMOVE_TEAM
})

const loadTeams = (teams) => {
    return {
      type: LOAD_TEAMS,
      teams: teams,
    }
}

const loadTeam = (team) => {
    return {
      type: LOAD_TEAMS,
      team: team,
    }
}

const initialState = { team: null, teams: null };

const teamsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_TEAM:
            return { team: action.payload };
        case REMOVE_TEAM:
            return { team: null };
        case LOAD_TEAM:
            newState = Object.assign({}, state);
            newState.team = action.team;
            return newState
        case LOAD_TEAMS:
            newState = Object.assign({}, state);
            newState.teams = action.teams;
            return newState
        default:
            return state;
    }
}

export default teamsReducer
