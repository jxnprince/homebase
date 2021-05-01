import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { projectPost } from '../../store/project';

const AddProjectPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("")
    const [dueDate, setDueDate] = useState("")
    const {teamId, userId} = useParams()

    const handleSubmit= async (e) => {
      e.preventDefault();
      const payload = {
          projectTitle,
          projectDescription,
          dueDate
        };
      let createdProject = await dispatch(projectPost(teamId, payload));

      if (createdProject) {
        history.push(`/users/${userId}/teams/${teamId}`);
      }

    };

    return (
      <form onSubmit={handleSubmit} className="add-member-form">
        <div className="add-member-container">
          <label className="add-member-label">Project Title:</label>
          <input
            type="text"
            className="project-title-input"
            name="projectTitle"
            onChange={(e) => setProjectTitle(e.target.value)}
            value={projectTitle}
            required
          ></input>
          <label className="add-member-label">Project Description:</label>
          <input
            type="text"
            className="project-description-input"
            name="projectDescription"
            onChange={(e) => setProjectDescription(e.target.value)}
            value={projectDescription}
            required
          ></input>
          <label className="add-member-label">Project Due Date:</label>
          <input
            type="text"
            className="project-due-date-input"
            name="projectDueDate"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
            required
          ></input>
          <button type="submit" className="new-member-submit">Add Project</button>
        </div>
      </form>
    );
  };

  export default AddProjectPage;
