from app.models import db, Team, User


# Adds a demo user, you can add other users here if you want
def seed_teams():
    user = User.query.filter(User.username == "Demo").first()
    data =  [
            Team(teamName = "Gold"),
            Team(teamName = "Green")
            ]
    for team in data:
        user.teams.append(team)
        db.session.add(team)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_teams():
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()
