const SET_COMMENTS = "comments/setProjectComments";
const ADD_COMMENT = "comments/addProjectComment";

//actions

const setProjectComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
};

const addProjectComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
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

export const addComment = (projectId, payload) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}/comment`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
    throw response;
  }
  const comment = await response.json();
  console.log(comment);
  dispatch(addProjectComment(comment));
  return comment;
};

const initialState = { comments: null, comment: null };
const CommentsReducer = (state = initialState, action) => {
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
      newState.comment = action.payload;
      return newState;
    default:
      return state;
  }
  // return "BubbleBop";
};

export default CommentsReducer;
