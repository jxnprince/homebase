from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    data =  [
            User(username='Demo', email='demo@aa.io', password='password', user_avatar='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg', firstname="Demo-liticia", lastname="Demoliter"),
            User(username='markman', email='mark@aa.io',  password='password', user_avatar='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg', firstname="Markief", lastname="Manchester"),
            User(username='eclectichobo', email='hobo@aa.io', password='password', user_avatar='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg', firstname="Warren", lastname="Griffin"),
            User(username='firefly', email='flyfire@aa.io', password='password', user_avatar='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg', firstname="Alexis", lastname="Goldberg"),
            User(username='thehuntress', email='huntingdudes@aa.io',password='password', user_avatar='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg', firstname="Griselda", lastname="McDermott"),
            User(username='morganfreeman', email='shawshank@aa.io',password='password', user_avatar='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg', firstname="Otis", lastname="Redding")
            ]
    for user in data:
        db.session.add(user)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
