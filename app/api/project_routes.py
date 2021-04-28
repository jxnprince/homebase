from flask import Blueprint, jsonify, session, request
from ..models.project import Project
from ..models.team import Team
from ..models.usersOnTeam import UsersOnTeams
from ..models.user import User
from ..models.task import Task
from ..models.comment import Comment
from ..models.db import db

project_routes = Blueprint('projects', __name__)

#"homebase/users/:id/teams/:id/projects/:id"
#GET
#renders project, team members associated, tasks, and the messageboard associated with the project
@project_routes.route('/<int:id>', methods=['GET'])
def get_projects(id):
    project = Project.query.get(id)
    team = Team.query.get(project.teamId)
    userIdList = Users.query.join(User.teams)
    taskList = Task.query.filter(Task.projectId == id).all()
    comments = Comment.query.filter(Comment.projectId == id).all()
    
    return {
        "project": project.to_dict(),
        "team": team.to_dict(),
        # "users": [User.query.get(userId).to_dict() for userId in userIdList],
        "tasks": [task.to_dict() for task in taskList],
        "comments": [comment.to_dict() for comment in comments]
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
