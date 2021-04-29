import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../store/comments";

const MessageBoard = () => {
  const dispatch = useDispatch();
  const teamComments = useSelector((state) => state.comments.teamComments);
  const currentTeam = useSelector((state) => state.team.currentTeam);

  useEffect(() => {
    dispatch(getComments(currentTeam.id));
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
