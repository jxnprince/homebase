import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { projectPost } from '../../store/project';
import './AddProjectPage.css'

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
        <div className="add-project-page">
            <form onSubmit={handleSubmit} className="add-project-form">
                <div className="add-project-container">
                    <h4 className="create-project-title">Create Project</h4>
                <label className="add-project-label">Project Title:</label>
                <input
                    type="text"
                    className="project-title-input"
                    name="projectTitle"
                    onChange={(e) => setProjectTitle(e.target.value)}
                    value={projectTitle}
                    required
                ></input>
                <label className="add-project-label">Project Description:</label>
                <input
                    type="text"
                    id="add-project-description"
                    className="project-description-input"
                    name="projectDescription"
                    onChange={(e) => setProjectDescription(e.target.value)}
                    value={projectDescription}
                    required
                ></input>
                <label className="add-project-label">Project Due Date:</label>
                <input
                    type="text"
                    className="project-due-date-input"
                    name="projectDueDate"
                    onChange={(e) => setDueDate(e.target.value)}
                    placeholder="YYYY-MM-DD"
                    value={dueDate}
                    required
                ></input>
                <button type="submit" className="new-project-submit">Add Project</button>
                </div>
            </form>
      </div>
    );
  };

  export default AddProjectPage;
