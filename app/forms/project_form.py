from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Project, Team
from flask_login import current_user


class ProjectForm(FlaskForm):
    projectTitle = StringField('Project Title', validators=[DataRequired()])
    projectDescription = StringField('Project Description', validators=[DataRequired()])
    dueDate = DateField('Project Due Date', validators=[DataRequired()])
