from .db import db



class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, nullable = False, primary_key = True)
    projectTitle = db.Column(db.String(50), nullable = False )
    projectDescription = db.Column(db.String(255), nullable = False )
    dueDate = db.Column(db.Date, nullable = False )
    teamId = db.Column(db.Integer, db.ForeignKey("teams.id"), nullable = False)

    team = db.relationship("Team", back_populates="projects")
    comments = db.relationship("Comment", back_populates="projects")
    tasks = db.relationship("Task", back_populates="projects")
