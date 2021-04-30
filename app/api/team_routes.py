# "homebase/users/:id/teams/"
# GET
# render all projects that belong to the team as well as all team members

# "homebase/users/:id/teams/"
# POST
# Via a modal posts a form that creates a new team that includes the user that created it as well as all form data
# Redirects to "homebase/users/:id/teams/:id" to view the newly created team

# "homebase/users/:id/teams/:id/delete"
# DELETE route
# Alert window check confirms before deleting
# for each project
# all associated tasks.projectId
# messageboard comments.projectId
# Deletes selected Project
# Deletes all mentions of selected team in usersOnTeam.teamId
# Deletes Selected team

from flask import Blueprint, session, jsonify, request
from app.models import Team, User, db
from app.forms import TeamForm, AddMemberForm

team_routes = Blueprint('teams', __name__)


@team_routes.route('/users/<int:id>/teams/<int:teamId>/addperson', methods=['POST'])
def add_member(id, teamId):
    form = AddMemberForm()
    team = Team.query.get(teamId)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        userName = form.data['teamMember']
        user = User.query.filter_by(username=userName).first()
        team.users.append(user)
        db.session.commit()
        return user.to_dict()
    return 'User Not Found'


@team_routes.route('/users/<int:id>/teams')
def teams(id):
    user = User.query.get(id)
    teams = user.teams
    return {"teams": [team.to_dict() for team in teams]}


@team_routes.route('/users/<int:id>/teams/<int:teamId>')
def team(id, teamId):
    team = Team.query.get(teamId)
    projects = team.projects
    return {"team": team.to_dict(), "projects": [project.to_dict() for project in projects]}


@team_routes.route('/users/<int:id>/teams/<int:teamId>/teammates')
def teammates(id, teamId):
    team = Team.query.get(teamId)
    users = team.users
    usernames = []
    for user in users:
        usernames.append(f'{user.firstname} {user.lastname}')
    return {"teammates": usernames}


@team_routes.route('/users/<int:id>/teams', methods=['POST'])
def teams_post(id):
    form = TeamForm()
    user = User.query.get(id)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        team = Team(
            teamName=form.data['teamName'],
        )
        team.users.append(user)
        db.session.add(team)
        db.session.commit()
        return team.to_dict()
    return "Oops, something went wrong!"


@team_routes.route('/users/<int:id>/teams/<int:teamId>/delete', methods=['DELETE'])
def teams_delete(id, teamId):
    team = Team.query.get(teamId)
    projects = team.projects
    if projects:
        for project in projects:
            comments = project.comments
            for comment in comments:
                db.session.delete(comment)
            tasks = project.tasks
            for task in tasks:
                db.session.delete(task)
            db.session.delete(project)
    db.session.delete(team)
    db.session.commit()
    return team.to_dict()
