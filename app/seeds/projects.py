from app.models import db, Project


# Adds a demo user, you can add other users here if you want
def seed_projects():

    data =  [
              Project(projectTitle = "Bathroom Detail", projectDescription = "Clean the entire bathrooom.", dueDate = "05/03/2021", teamId = 1),
              Project(projectTitle = "Kitchen Duty", projectDescription = "Clean the Kitchen from top to bottom.", dueDate = "05/03/2021", teamId = 1),
              Project(projectTitle = "Laundry", projectDescription = "Wash all the laundry.", dueDate = "05/03/2021", teamId = 2),
              Project(projectTitle = "Yard Work", projectDescription = "Perform yard work as expected by the HOA.", dueDate = "05/03/2021", teamId = 2)
            ]
    for project in data:
        db.session.add(project)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
