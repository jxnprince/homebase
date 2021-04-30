const SET_COMMENTS = "comments/set";
const ADD_COMMENT = "comments/add";

const initialState = {};
//actions
export const setProjectComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
};

export const addProjectComments = (comments) => {
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

const commentsReducer = (comments = initialState, action) => {
  // switch (action.type) {
  //   case SET_COMMENTS:
  //     const commentsPayload = action.payload;
  //     const newComment = {};
  //     for (const comment of commentsPayload) {
  //       newComment[comment.id] = comment;
  //     }
  //     return newComment;
  //   case ADD_COMMENT:
  //     const newState = Object.assign({}, comments);
  //     newState.userComments = action.payload;
  //     return newState;
  //   default:
  //     return comments;
  // }
  return "BubbleBop";
};

export default commentsReducer;
