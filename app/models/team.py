from .db import db
from .usersOnTeam import UsersOnTeams


class Team(db.Model):
    __tablename__ = "teams"

    id = db.Column(db.Integer, nullable = False, primary_key = True)
    teamName = db.Column(db.String(50), nullable = False)
    
    users = db.relationship("User", secondary=UsersOnTeams, back_populates="teams")
    projects = db.relationship("Project", back_populates="team")

    def to_dict(self):
        return {
            "id": self.id,
            "teamName": self.teamName,
        }