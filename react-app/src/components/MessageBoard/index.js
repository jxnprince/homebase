import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProjectComments } from "../../store/comments";

const MessageBoard = () => {
  const dispatch = useDispatch();
  const teamComments = useSelector((state) => state.comments.teamComments);
  const { projectId } = useParams();
  // const currentTeam = useSelector((state) => state.team.currentTeam);

  useEffect(() => {
    dispatch(getProjectComments(projectId));
  });

  return (
    <div class="board-container">
      <h1>Message Board</h1>
      {teamComments?.map((comment) => (
        <div>
          <div>{comment.commentBody}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageBoard;
