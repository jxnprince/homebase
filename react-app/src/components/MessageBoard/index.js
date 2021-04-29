import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const MessageBoard = () => {
  const dispatch = useDispatch();

  return (
    <div class="board-container">
      <h1>Message Board</h1>
    </div>
  );
};

export default MessageBoard;
