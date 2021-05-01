import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getProjectComments } from "../../store/comments";
import { useParams } from "react-router-dom";
import "./AddComment.css";

const AddCommentComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [commentBody, setCommentBody] = useState("");
  const { projectId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      commentBody,
    };

    await dispatch(addComment(projectId, payload));
    dispatch(getProjectComments(projectId));
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="comment-space">
        <label>
          <h5>Write a Comment</h5>
        </label>
        <input
          type="text"
          name="setComment"
          onChange={(e) => setCommentBody(e.target.value)}
          value={commentBody}
          required
        ></input>
      </div>
      <button className="add-comment-btn" type="submit">
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentComponent;
