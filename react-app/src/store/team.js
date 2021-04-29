const ADD_TEAM = "team/ADD_TEAM";
const REMOVE_TEAM = "team/REMOVE_TEAM";
const LOAD_TEAMS = "team/LOAD_TEAMS";
const LOAD_TEAM = "team/LOAD_TEAM"
const ADD_TEAMMATE = "team/ADD_TEAMMATE"
const LOAD_TEAMMATES = "team/LOAD_TEAMMATES"

const addTeam = (team) => ({
    type: ADD_TEAM,
    payload: team
})

const removeTeam = () => ({
    type: REMOVE_TEAM
})

const addTeammate = () => ({
    type: ADD_TEAMMATE
})

const loadTeammates = (teammates) => {
    return {
      type: LOAD_TEAMMATES,
      teammates: teammates,
    }
}

const loadTeams = (teams) => {
    return {
      type: LOAD_TEAMS,
      teams: teams,
    }
}

const loadTeam = (team) => {
    return {
      type: LOAD_TEAM,
      team: team,
    }
}

export const teamPost = (userId, payload) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/teams`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) throw response;
    const teammate = await response.json();
    dispatch(addTeammate(teammate))
    return teammate;
}

export const memberPost = (userId, teamId, payload) => async dispatch => {
    const response = await fetch(`/api//users/${userId}/teams/${teamId}/addperson`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) throw response;
    const team = await response.json();
    dispatch(addTeam(team))
    return team;
}

const initialState = { team: null, teams: null, teammate: null, teammates: null };

const teamsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_TEAM:
            newState = Object.assign({}, state);
            newState.team = action.payload
            return newState
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
        case ADD_TEAMMATE:
            newState = Object.assign({}, state);
            newState.team = action.payload
            return newState
        case LOAD_TEAMMATES:
            newState = Object.assign({}, state);
            newState.teammates = action.teammates;
            return newState
        default:
            return state;
    }
}

export default teamsReducer
