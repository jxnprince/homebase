# "homebase/users/:id/teams/"
#GET
#render all projects that belong to the team as well as all members of the team

# "homebase/users/:id/teams/"
#POST
#Via a modal posts a form that creates a new team that includes the user that created it as well as all form data
#Redirects to "homebase/users/:id/teams/:id" to view the newly created team

# "homebase/users/:id/teams/:id/delete"
# DELETE route
# Alert window check confirms before deleting
    #for each project
        # all associated tasks.projectId
        # messageboard comments.projectId
        # Deletes selected Project
    #Deletes all mentions of selected team in usersOnTeam.teamId
    #Deletes Selected team

from flask import Blueprint, session
from app.models import Team, User
from app.forms import TeamForm, SearchForm

team_routes = Blueprint('teams', __name__)


@team_routes.route('/search', methods=['GET', 'POST'])
def search():
    searchForm = SearchForm()
    users = Users.query


@team_routes.route('homebase/users/<int:id>/teams')
def teams(id):
    user = User.query.get(id)
    teams = user.teams
    return {"teams": [team.to_dict() for team in teams]}


@team_routes.route('homebase/users/<int:id>/teams', methods=['POST'])
def teams_post():
    form = TeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        team = Team(
            teamName=form.data['Team Name'],
            users=
            projects=[]
        )
        db.session.add(team)
        db.session.commit()
        return team.to_dict()
