from flask.cli import AppGroup
from .users import seed_users, undo_users
from .teams import seed_teams, undo_teams
from .usersonteams import seed_usersOnTeams, undo_usersOnTeams
from .projects import seed_projects, undo_projects
from .tasks import seed_tasks, undo_tasks
from .comments import seed_comments, undo_comments
from .usersonteams import UsersOnTeams

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_teams()
    # seed_usersOnTeams(UsersOnTeams)
    seed_projects()
    seed_tasks()
    seed_comments()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_comments()
    undo_tasks()
    undo_projects()
    # undo_usersOnTeams()
    undo_teams()
    undo_users()
    # Add other undo functions here
