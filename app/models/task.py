from .db import db





class Task(db.Model):
    __tablename__ = "tasks"

    id = db.Column(db.Integer, nullable = False, primary_key = True)
    taskName = db.Column(db.String(50), nullable = False)
    taskBody = db.Column(db.String(255), nullable = True)
    dueDate = db.Column(db.Date, nullable = False)
    completed = db.Column(db.Boolean, nullable = False)
    assignedUserId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = True)
    projectId = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable = False)


    user = db.relationship("User", back_populates="tasks")
    project = db.relationship("Project", back_populates="tasks")


# billing_address_id = Column(Integer, ForeignKey("address.id"))
#     shipping_address_id = Column(Integer, ForeignKey("address.id"))

#     billing_address = relationship("Address", foreign_keys=[billing_address_id])
#     shipping_address = relationship("Address", foreign_keys=[shipping_address_id])
