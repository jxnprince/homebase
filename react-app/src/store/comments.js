const SET_COMMENTS = "comments/set";
const ADD_COMMENT = "comments/add";

const initialState = {};
//actions
export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
};

export const addReview = (comments) => {
  return {
    type: ADD_COMMENT,
    payload: comments,
  };
};
