const ADD_PROJECT = "project/ADD_PROJECT";
const REMOVE_PROJECT = "project/REMOVE_PROJECT";
const LOAD_PROJECT = "project/LOAD_PROJECT"
const LOAD_USER_PROJECTS = "project/LOAD_USER_PROJECTS"

const addProject = (project) => ({
    type: ADD_PROJECT,
    payload: project
})

const removeProject = () => ({
    type: REMOVE_PROJECT
})

const loadProject = (project) => {
    return {
      type: LOAD_PROJECT,
      project: project,
    }
}

const loadUserProjects = (userProjects) => {
    return {
      type: LOAD_USER_PROJECTS,
      userProjects: userProjects,
    }
}



// export const projectPost = (userId, payload) => async dispatch => {
//     const response = await fetch(`/api/users/${userId}/Projects`, {
//       method: "POST",
//       body: JSON.stringify(payload),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     if (!response.ok) throw response;
//     const Projectmate = await response.json();
//     dispatch(addProjectmate(Projectmate))
//     return Projectmate;
// }

// export const getProject = (userId, ProjectId) => async dispatch => {
//     const response = await fetch(`/api/users/${userId}/Projects/${ProjectId}`);
//     if(response.ok) {
//       const Project = await response.json();
//       dispatch(loadProject(Project))
//     }
// }

// export const getProjects = (userId) => async dispatch => {
//     const response = await fetch(`/api/users/${userId}/projects`);
//     if(response.ok) {
//       const projects = await response.json();
//       dispatch(loadProjects(projects))
//     }
// }

export const getUserProjects = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/user-projects`);
    if(response.ok) {
      const userProjects = await response.json();
      dispatch(loadUserProjects(userProjects))
    }
}

const initialState = { project: null, projects: null, userProjects: null };

const ProjectsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_PROJECT:
            newState = Object.assign({}, state);
            newState.project = action.payload
            return newState
        case REMOVE_PROJECT:
            return { project: null };
        case LOAD_PROJECT:
            newState = Object.assign({}, state);
            newState.project = action.Project;
            return newState
        case LOAD_USER_PROJECTS:
            newState = Object.assign({}, state);
            newState.userProjects = action.userProjects;
            return newState
        default:
            return state;
    }
}

export default ProjectsReducer
