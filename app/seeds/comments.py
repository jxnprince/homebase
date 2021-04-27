from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():

    data =  [
            Comment(commentBody = "We are out of scrubbing bubbles.", createdAt = CURRENT_TIMESTAMP(), projectId = 1, userId = 1),
            Comment(commentBody = "Note to self: Flushable wipes are no longer flushable!", createdAt = CURRENT_TIMESTAMP(), projectId = 1, userId = 2),
            Comment(commentBody = "Can I use lysol?", createdAt = CURRENT_TIMESTAMP(), projectId = 2, userId = 3),
            Comment(commentBody = "My hands are too pruney.", createdAt = CURRENT_TIMESTAMP(), projectId = 2, userId = 3),
            Comment(commentBody = "Do we have any dryer sheets?", createdAt = CURRENT_TIMESTAMP(), projectId = 3, userId = 4),
            Comment(commentBody = "How do you fold a fitted sheet?", createdAt = CURRENT_TIMESTAMP(), projectId = 3, userId = 5),
            Comment(commentBody = "A homeless guys ran off with the rake.", createdAt = CURRENT_TIMESTAMP(), projectId = 4, userId = 6),
            Comment(commentBody = "I can't cut the grass until the leaves have been raked.", createdAt = CURRENT_TIMESTAMP(), projectId = 4, userId = 1)

            ]
    for comment in data:
        db.session.add(comment)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
