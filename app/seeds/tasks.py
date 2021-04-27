from app.models import db, Task


# Adds a demo user, you can add other users here if you want
def seed_tasks():

    data =  [
            Task(taskName = "Clean the shower", taskBody = "Use scrubbing bubbles to remove soap scum.", dueDate = "05/03/2021", completed = False, assignedUserId = 1, projectId = 1),
            Task(taskName = "Clean the toilet", taskBody = "", dueDate = "05/03/2021", completed = False, assignedUserId = 2, projectId = 1),
            Task(taskName = "Clean Sink", taskBody = "", dueDate = "05/03/2021", completed = False, assignedUserId = 3, projectId = 1),
            Task(taskName = "Wipe counters down", taskBody = "Clean counters using disinfectant", dueDate = "05/03/2021", completed = False, assignedUserId = 3, projectId = 2),
            Task(taskName = "Clean the oven", taskBody = "", dueDate = "05/03/2021", completed = False, assignedUserId = 2, projectId = 2),
            Task(taskName = "Wash the dishes", taskBody = "Load dishes into the dish washer.", dueDate = "05/03/2021", completed = False, assignedUserId = 1, projectId = 2),
            Task(taskName = "Sort and Wash clothes", taskBody = "Seperate darks and lights", dueDate = "05/03/2021", completed = False, assignedUserId = 4, projectId = 3),
            Task(taskName = "Dry the clothes", taskBody = "", dueDate = "05/03/2021", completed = False, assignedUserId = 5, projectId = 3),
            Task(taskName = "Fold the clothes", taskBody = "", dueDate = "05/03/2021", completed = False, assignedUserId = 6, projectId = 3),
            Task(taskName = "Cut the grass", taskBody = "Use scissors to cut grass for precision cut.", dueDate = "05/03/2021", completed = False, assignedUserId = 5, projectId = 4),
            Task(taskName = "Rake up the leaves", taskBody = "", dueDate = "05/03/2021", completed = False, assignedUserId = 5, projectId = 4),
            Task(taskName = "Pick up crabapples", taskBody = "", dueDate = "05/03/2021", completed = False, assignedUserId = 4, projectId = 4),

            ]
    for task in data:
        db.session.add(task)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
