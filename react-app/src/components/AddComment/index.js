import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addComment } from "../../store/comments";

const AddCommentComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      comment,
    };

    let newComment = await dispatch(addComment(user.id, payload));

    if (newComment) {
      history.push(`/users/${user.id}/projects/${newComment.id}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Write a Comment</label>
        <input
          type="text"
          name="setComment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          required
        ></input>
      </div>
      <buttom type="submit">Add Comment</buttom>
    </form>
  );
};

export default AddCommentComponent;
