from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .usersOnTeam import UsersOnTeams


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  firstname = db.Column(db.String(50), nullable = False)
  lastname = db.Column(db.String(50), nullable = False)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  user_avatar = db.Column(db.String(255), nullable = True)
  hashed_password = db.Column(db.String(255), nullable = False)

  teams = db.relationship("Team", secondary=UsersOnTeams, back_populates="users")
  comments = db.relationship("Comment", back_populates="user")
  tasks = db.relationship("Task", back_populates="user")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "firstname": self.firstname,
      "lastname": self.lastname,
      "username": self.username,
      "email": self.email,
      "user_avatar": self.user_avatar,
      "hashed_password": self.hashed_password
    }
