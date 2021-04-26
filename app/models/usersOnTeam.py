from .db import db




usersOnTeams = db.Table(
    "usersOnTeams",
     db.Column("userId", db.Integer, db.ForeignKey("users.id"), primary_key = True),
     db.Column("teamId", db.Integer, db.ForeignKey("teams.id"), primary_key = True)
)
