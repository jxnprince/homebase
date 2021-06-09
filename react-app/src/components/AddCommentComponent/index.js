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
    <form className="comment-form-container" onSubmit={handleSubmit}>
        {/* <h3 id='write-a-comment'>Write a Comment</h3> */}
      <div className="comment-space">
        <input
          id='comment-input'
          placeholder='Write a Comment'
          type="text"
          name="setComment"
          onChange={(e) => setCommentBody(e.target.value)}
          value={commentBody}
          required
        ></input>
      <button id="add-comment-btn" type="submit">
        Add Comment
      </button>
      </div>
    </form>
  );
};

export default AddCommentComponent;
