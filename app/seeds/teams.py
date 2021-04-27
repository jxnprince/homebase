from app.models import db, Team


# Adds a demo user, you can add other users here if you want
def seed_teams():

    data =  [
            Team(teamName = "Gold"),
            Team(teamName = "Green")
            ]
    for team in data:
        db.session.add(team)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_teams():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
