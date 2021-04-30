const SET_COMMENTS = "comments/setProjectComments";
const ADD_COMMENT = "comments/addProjectComments";

//actions

const setProjectComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
};

const addProjectComments = (comments) => {
  return {
    type: ADD_COMMENT,
    payload: comments,
  };
};

export const getProjectComments = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}/comments`);
  if (!response.ok) {
    throw response;
  }
  const comments = await response.json();
  console.log(comments);
  dispatch(setProjectComments(comments));
};
const initialState = { comments: null };
const commentsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_COMMENTS:
      newState = Object.assign({}, state);
      newState.comments = action.payload;

      return newState;
    // const commentsPayload = action.payload;
    // const newComment = {};
    // for (const comment of commentsPayload) {
    //   newComment[comment.id] = comment;
    // }
    // return newComment;
    case ADD_COMMENT:
      newState = Object.assign({}, state);
      newState.userComments = action.payload;
      return newState;
    default:
      return state;
  }
  // return "BubbleBop";
};

export default commentsReducer;
