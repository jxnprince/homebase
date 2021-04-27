from .db import db
from datetime import datetime


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, nullable = False, primary_key = True)
    commentBody = db.Column(db.String(255), nullable = False)
    createdAt = db.Column(db.DateTime, nullable = False, default=datetime.utcnow)
    projectId = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable = False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)

    project = db.relationship("Project", back_populates="comments")
    user = db.relationship("User", back_populates="comments")
