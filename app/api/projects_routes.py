from flask import Flask
from ..models.project.py import Project
from ..models.team.py import Team
from ..models.usersOnTeam import UsersOnTeam
from ..models.user.py import User
from ..models.task.py import Task
from ..models.comment.py import Comment
from ..models.db import db
from ..__init__.py import app
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField, IntegerField, DateField, BooleanField, SubmitField, SelectField, TextAreaField



#"homebase/users/:id/teams/:id/projects/:id"
#GET
#renders project, team members associated, tasks, and the messageboard associated with the project
@app.route('/users/<int:user_Id>/teams/<int:team_Id>/projects/<int:project_Id>')
def get_projects():
    project = Project.query.get(project_Id)
    team = Team.query.get(team_Id)
    users = UsersOnTeam.query.filter(select(UsersOnTeam.userId).where(UsersOnTeam.teamId == team_id)).all()
    tasks = Task.query.filter(select(Task.id).where(Task.projectId == project_Id)).all()
    comments = Comment.query.filter(select(Comment.id).where(Comment.projectId == project_Id)).all()



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
