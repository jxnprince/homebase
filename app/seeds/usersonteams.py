from app.models import db, UsersOnTeams


# Adds a demo user, you can add other users here if you want
def seed_usersOnTeams(UsersOnTeams):

    data =  [
            UsersOnTeams(userId = 1, teamId = 1),
            UsersOnTeams(userId = 2, teamId = 1),
            UsersOnTeams(userId = 3, teamId = 1),
            UsersOnTeams(userId = 4, teamId = 2),
            UsersOnTeams(userId = 5, teamId = 2),
            UsersOnTeams(userId = 6, teamId = 2),
            UsersOnTeams(userId = 1, teamId = 2),
            ]
    for user_on_team in data:
        db.session.add(user_on_team)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_usersOnTeams():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
