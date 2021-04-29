import { csrfFetch } from 'react';

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

export const getComments = () async (dispatch) => {
    const response = await csrfFetch('');
    if(!response.ok){
        throw response;
    }
    const comments = await response.json();
    dispatch(setComments(comments));
}
