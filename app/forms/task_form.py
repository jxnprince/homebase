from flask_wtf import FlaskForm
from wtforms.fields import (PasswordField, SelectField, SelectMultipleField, StringField, SubmitField, DateTimeField)
from wtforms.fields.core import BooleanField, DateTimeField
from wtforms.validators import DataRequired


class CreateTaskForm(FlaskForm):
    taskName = StringField("Task Name", [DataRequired()])
    taskBody = StringField("Description")
    dueDate = DateTimeField("Due Date")
    completed = BooleanField("Completed")
    assignedUserId = SelectField("Assigned To", coerce=int)