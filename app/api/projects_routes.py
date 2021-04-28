from flask import Blueprint, jsonify, session, request
from ..models.project import Project
from ..models.team import Team
from ..models.usersOnTeam import UsersOnTeams
from ..models.user import User
from ..models.task import Task
from ..models.comment import Comment
from ..models.db import db
from ..__init__.py import app
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField, IntegerField, DateField, BooleanField, SubmitField, SelectField, TextAreaField

project_routes = Blueprint('projects', __name__)

#"homebase/users/:id/teams/:id/projects/:id"
#GET
#renders project, team members associated, tasks, and the messageboard associated with the project
@project_routes.route('/users/<int:user_Id>/teams/<int:team_Id>/projects/<int:project_Id>', methods=['GET'])
def get_projects():
    project = Project.query.get(project_Id)
    team = Team.query.get(team_Id)
    users = UsersOnTeam.query.filter(select(UsersOnTeam.userId).where(UsersOnTeam.teamId == team_id)).all()
    tasks = Task.query.filter(select(Task.id).where(Task.projectId == project_Id)).all()
    comments = Comment.query.filter(select(Comment.id).where(Comment.projectId == project_Id)).all()
    
    return {
        "project": project.to_dict(),
        "team": project.to_dict(),
        "users": project.to_dict(),
        "tasks": project.to_dict(),
        "comments": project.to_dict()
    }

#"homebase/users/:id/teams/:id/projects/"
#POST
#renders a modal with a form for creating a project.  Appears on team page

#"homebase/users/:id/teams/:id/projects/:id/delete"
#Delete
    # all associated tasks.projectId
    # messageboard comments.projectId
    # Deletes selected Project

#"homebase/users/:id/teams/:id/projects/:id/edit"
#PATCH
#renders a modal with a form for creating a project with prepopulated forms.

#"homebase/users/:id/teams/:id/projects/:id/comments"
#POST
#Posts a comment to the message board with timestamp

#"homebase/users/:id/teams/:id/projects/:id/comments/:id/delete"
#DELETE
#Deletes a comment from the message board
