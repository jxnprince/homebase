from flask import Blueprint, jsonify, request, redirect, url_for
from flask_login import current_user, login_required
from ..forms.task_form import CreateTaskForm
from ..models.project import Project
from ..models.team import Team
from ..models.usersOnTeam import UsersOnTeams
from ..models.user import User
from ..models.task import Task
from ..models.comment import Comment
from ..models.db import db
from flask_login import current_user


task_routes = Blueprint("tasks", __name__)


# "homebase/users/:id/teams/:id/projects/:id/tasks/create"
# POST - appears on project page in form modal
@task_routes.route("/projects/<int:id>/create", methods=["POST"])
def create_task(id):
    form = CreateTaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    project = Project.query.get(id)
    team = Team.query.get(project.teamId)
    # form.assignedUserId.choices = [(user.id, f'{user.firstname} {user.lastname}') for user in team.users]  # noqa
    print(form.data)
    if form.validate_on_submit():
        data = Task()
        form.populate_obj(data)
        data.projectId = project.id
        data.completed = False
        db.session.add(data)
        db.session.commit()
        return data.to_dict()
    else:
        return {'Form not validated. Task not created.'}


# "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# GET
# Render all information about a singular task as well as host edit and delete buttons  # noqa
@task_routes.route("/<int:id>", methods=["GET"])
def show_task(id):
    task = Task.query.get(id)
    return task.to_dict()


# "homebase/users/:id/teams/:id/projects/:id/tasks/"
# GET
# Render ten tasks organized by due date decending** (DUE SOONEST FIRST)
# is this ascending or descending?
@task_routes.route("/projects/<int:id>", methods=["GET"])
# @login.required
def get_all_tasks(id):
    project = Project.query.get(id)
    projectTasks = Task.query.filter(Task.projectId == id).order_by(Task.dueDate.desc()).limit(10).all()  # noqa

    return {
        "Project Tasks": [task.to_dict() for task in projectTasks]
        }


# "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# Patch
# renders a modal with a form for creating a task with prepopulated forms.
# @login_required
@task_routes.route("/<int:id>/edit", methods=["PATCH"])
def edit_task(id):
    task = Task.query.get(id)
    if task:
        task.taskName = request.form['taskName']
        task.taskBody = request.form['taskBody']
        task.dueDate = request.form['dueDate']
        task.assignedUserId = request.form['assignedUserId']
        db.session.add(task)
        db.session.commit()
        return f'{Task} was successfully updated'
    return {"Errors": 'Bad'}, 400


# "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# Delete
    # Set tasks.assignedUserId to Null
    # Delete's specified task
@task_routes.route("/<int:id>/delete", methods=['DELETE'])
# @login.required
def delete_task(id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return task.to_dict()
