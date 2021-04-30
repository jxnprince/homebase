from flask_wtf import FlaskForm
from wtforms.fields import (PasswordField, SelectField, StringField, SubmitField, DateTimeField, IntegerField)  # noqa
from wtforms.fields.core import BooleanField, DateTimeField
from wtforms.validators import DataRequired


class CreateTaskForm(FlaskForm):
    taskName = StringField("Task Name", validators=[DataRequired()])
    taskBody = StringField("Description")
    dueDate = StringField("Due Date", validators=[DataRequired()])
    assignedUserId = IntegerField("Assigned To", validators=[DataRequired()])
    # submit = SubmitField("Create new task")
