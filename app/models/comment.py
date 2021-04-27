from .db import db
from sqlalchemy.sql import func


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    commentBody = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    projectId = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable = False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)

    project = db.relationship("Project", back_populates="comments")
    user = db.relationship("User", back_populates="comments")
