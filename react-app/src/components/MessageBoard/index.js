import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddCommentComponent from "../AddCommentComponent";
import { getProjectComments } from "../../store/comments";
import "./MessageBoard.css";

const MessageBoard = () => {
  const dispatch = useDispatch();
  const teamComments = useSelector((state) => state.comments.comments);
  const { projectId } = useParams();
  const commentDateFormatter = (date) =>{
    let arr = date.split(' ')
    let dayArr = [arr[3][2], arr[3][3]]
    let timeArr = arr[4].split(':')
    let timeAttForm = [timeArr[1],timeArr[2]]
    let newArr = [arr[0], arr[1], arr[2], dayArr.join(''), timeAttForm.join(':')]
    date = newArr.join(' ')
    return date
  }

  useEffect(() => {
    dispatch(getProjectComments(projectId));
  }, [projectId]);

  return (
    <div className="board-container">
      <div id='static-heading-elements'>
        <h1 className="mb-title">Message Board</h1>
        <div id="internal-comment-div">
        {teamComments?.comments.map((comment, i) => (
          <div className="comment-container">
            <div id="comment-body">{comment.commentBody}</div>
            <div id='post-credit'>
              <div id="comment-username">- {comment.username}</div>
              <div id="comment-created">{commentDateFormatter(comment.createdAt)}</div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div id='add-comment'>
        <AddCommentComponent />
      </div>
    </div>
  );
};

export default MessageBoard;
