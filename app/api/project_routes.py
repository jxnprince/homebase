from flask import Blueprint, session, request
from flask_login import current_user
import datetime
from ..models.db import db
from ..models.project import Project
from ..models.team import Team
from ..models.user import User
from ..models.task import Task
from ..models.comment import Comment
from ..models.usersOnTeam import UsersOnTeams
from ..forms.project_form import ProjectForm
from ..forms.comment_form import CommentForm

project_routes = Blueprint('projects', __name__)


# "homebase/users/:id/teams/:id/projects/:id"
# GET
# renders project, team members associated, tasks, and the messageboard associated with the project # noqa
@project_routes.route('/<int:id>/teams/<int:id2>/user/<int:id3>', methods=['GET'])  # noqa
def get_projects(id):
    project = Project.query.get(id)
    team = Team.query.get(project.teamId)
    taskList = Task.query.filter(Task.projectId == id).all()
    comments = Comment.query.filter(Comment.projectId == id).all()
    usersOnTeam = team.users
    return {
        "project": project.to_dict(),
        "team": team.to_dict(),
        "tasks": [task.to_dict() for task in taskList],
        "comments": [comment.to_dict() for comment in comments],
        "users": [user.to_dict() for user in usersOnTeam],
    }


# "homebase/users/:id/teams/:id/projects/"
# POST
# renders a modal with a form for creating a project.  Appears on team page
@project_routes.route('create/teams/<int:teamId>', methods=['POST'])
def post_project(teamId):
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Project()
        form.populate_obj(data)
        data.teamId = teamId
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    else:
        return 'Something is wrong with the /api/projects/create route'


# "homebase/users/:id/teams/:id/projects/:id/delete"
@project_routes.route('<int:id>/delete', methods=['DELETE'])
def delete_project(id):
    project = Project.query.get(id)
    db.session.delete(project)
    db.session.commit()
    return (f'Project: {project.projectTitle} was Deleted')


# "homebase/users/:id/teams/:id/projects/:id/edit"
# PATCH
# renders a modal with a form for creating a project with prepopulated forms.
@project_routes.route('<int:id>/edit', methods=['PATCH'])
def edit_project(id):
    project = Project.query.get(id)
    teamId = project.teamId
    if project:
        project.projectTitle = request.form['projectTitle']
        project.projectDescription = request.form['projectDescription']
        project.dueDate = request.form['dueDate']
        db.session.add(project)
        db.session.commit()
        return f'{project.projectTitle} was successfully updated'
    return {"project edit failure": "Incorrect field"}, 400


# "homebase/users/:id/teams/:id/projects/:id/comments"
# POST
# Posts a comment to the message board with timestamp
@project_routes.route('<int:id>/comment', methods=['POST'])
def post_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Comment()
        form.populate_obj(data)
        data.createdAt = datetime.datetime.utcnow()
        data.projectId = id
        data.userId = current_user.id
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    else:
        return 'Something is wrong with the /api/projects/comment'

@project_routes.route('/<int:id>/comments', methods=['GET'])
def get_comments(id):
    project = Project.query.get(id)
    comments = project.comments
    usernames = []
    for comment in comments:
        user = User.query.get(comment.userId)
        userString = f'{user.firstname} {user.lastname}'
        usernames.append(userString)
    return {
        "comments": [comment.to_dict() for comment in comments],
        "users": usernames

    }


#"homebase/users/:id/teams/:id/projects/:id/comments/:id/delete"
#DELETE
#Deletes a comment from the message board
@project_routes.route('/comment/<int:id>/delete', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return (f'Comment was Deleted')
