from .db import db


UsersOnTeams = db.Table(
    "usersOnTeams",
    db.Column("userId", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("teamId", db.Integer, db.ForeignKey("teams.id"), primary_key=True)
)

# class UsersOnTeams(db.Table):
#     __tablename__ = "usersOnTeams"

#     "usersOnTeams",
#     userId = db.Column("userId", db.Integer, db.ForeignKey("users.id"), primary_key = True),
#     teamId = db.Column("teamId", db.Integer, db.ForeignKey("teams.id"), primary_key = True)

#     def to_dict(self):
#         return{
#             "userId": self.userId,
#             "teamId": self.teamId
#         }
