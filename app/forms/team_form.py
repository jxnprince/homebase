from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class AddMemberForm(FlaskForm):
    teamMember = StringField('Enter desired username', validators=[DataRequired()])  # noqa


class TeamForm(FlaskForm):
    teamName = StringField('Team Name', validators=[DataRequired()])
