import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProjectComments } from "../../store/comments";
import "./MessageBoard.css";

const MessageBoard = () => {
  const dispatch = useDispatch();
  const teamComments = useSelector((state) => state.comments.comments);
  const { projectId } = useParams();
  // const currentTeam = useSelector((state) => state.team.currentTeam);

  useEffect(() => {
    dispatch(getProjectComments(projectId));
  }, [projectId]);

  return (
    <div className="board-container">
      <h1>Message Board</h1>
      {teamComments?.comments.map((comment, i) => (
        <div className="comment-container">
          <div className="comment-body">
            {comment.commentBody}
            <span> By: {comment.username}</span>
            <span> | Posted: {comment.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageBoard;
