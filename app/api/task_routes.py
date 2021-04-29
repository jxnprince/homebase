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


task_routes = Blueprint("tasks", __name__)

# "homebase/users/:id/teams/:id/projects/:id/tasks/create"
# POST - appears on project page in form modal
@task_routes.route("create/task/<int:taskId>", methods=["POST"])
# @login.required
def create_task(teamId):
    form = CreateTaskForm()
    team = Team.query.get(teamId)
    form['csrf_token'].data = request.cookies['csrf_token']
    form.user.choices = [(user.id, user.firstname, user.lastname) for user in team.users]
    if form.validate_on_submit():
        data = Task()
        form.populate_obj(data)
        data.userId = userId
        db.session.add(task)
        db.session.commit()
        return data.to_dict()
    else:
        return 'Something has gone wrong. Task not created. '

# "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# GET 
# Render all information about a singular task as well as host edit and delete buttons
@task_routes.route("/tasks/<int:taskId>", methods=["GET"])
# @login.required
def show_task(id):
    task = Task.query.get(Task.taskId)
    return {
        "task": task.to_dict()
    }

# "homebase/users/:id/teams/:id/projects/:id/tasks/"
# GET 
# Render ten tasks organized by due date decending** (DUE SOONEST FIRST)
@task_routes.route("/tasks/<int:dueDate>", methods=["GET"])
# @login.required
def get_all_tasks(id)
    taskList = Task.query.filter(Task.dueDate == dueDate).all()
return {

}

# "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# Patch 
# renders a modal with a form for creating a task with prepopulated forms.
@task_routes.route("<int:id>/edit", methods=["PATCH"])
# @login.required
def edit_task(id):
    task = Task.query.get(id)
    userId = task.userId
    db.session.delete(task)
    db.session.commit()
    taskName = request.form['taskTitle']
    taskBody = request.form['taskDescription']
    dueDate = request.form['dueDate']
    completed = request.form['completed']
    assignedUserId = request.form['assignedUserId']
    task = Task(taskName=taskName, taskBody=taskBody, dueDate=dueDate,taskId=taskId)
    db.session.add(task)
    db.session.commit()
    return f'{Task} was successfully updated'
else:
    return 'Edit failed, please try again.'

# "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# Delete 
    # Set tasks.assignedUserId to Null
    # Delete's specified task
@task_routes.route("<int:id>/delete", methods=['DELETE'])
# @login.required
def delete_task(id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return f'Task: {task.taskName} was Deleted'
else:
    return f'Task: {task.taskName} was Not Deleted.'