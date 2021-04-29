# from flask import Blueprint, jsonify, request, redirect, url_for
# from flask_login import current_user, login_required
# from ..forms.create_task import CreateTaskForm
# from ..models.project import Project
# from ..models.team import Team
# from ..models.usersOnTeam import UsersOnTeams
# from ..models.user import User
# from ..models.task import Task
# from ..models.comment import Comment
# from ..models.db import db


# task_routes = Blueprint("tasks", __name__, url_prefix="/users/:userId/teams/:teamId/projects/:projectId")

# # "homebase/users/:id/teams/:id/projects/:id/tasks/create"
# # POST - appears on project page in form modal
# @task_routes("/tasks/create", methods=["POST"])
# @login.required
# def create_task(teamId):
#     team = Team.query.get(teamId)
#     form = CreateTaskForm()
#     form.user.choices = [(user.id, user.firstname, user.lastname) for user in team.users]
#     if form.validate_on_submit():
#         task = Task(
#             taskName=form.taskName.data,
#             taskBody=form.taskBody.data,
#             dueDate=form.dueDate.data,
#             completed=form.completed.data,
#             assignedUserId=form.assignedUserId.data,
#             projectId=form.projectId.data
#         )
#         db.session.add(task)
#     db.session.commit()
#     return redirect(url_for('/tasks/:taskId'))

# # "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# # GET
# # Render all information about a singular task as well as host edit and delete buttons
# @task_routes("/tasks/create", methods=["GET"])
# @login.required

# # "homebase/users/:id/teams/:id/projects/:id/tasks/"
# # GET
# # Render ten tasks organized by due date decending** (DUE SOONEST FIRST)
# @task_routes("/tasks/create", methods=["GET"])
# @login.required

# # "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# # Patch
# # renders a modal with a form for creating a task with prepopulated forms.
# @task_routes("/tasks/create", methods=["PATCH"])
# @login.required

# # "homebase/users/:id/teams/:id/projects/:id/tasks/:id"
# # Delete
#     # Set tasks.assignedUserId to Null
#     # Delete's specified task
# @task_routes("/tasks/create", methods=["DELETE"])
# @login.required
