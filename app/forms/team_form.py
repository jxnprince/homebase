from flask_wtf import FlaskForm
from wtforms import StringField, SearchField
from wtforms.validators import DataRequired


class TeamForm(FlaskForm):
    teamName = StringField('Team Name', validators=[DataRequired()])


class SearchForm(FlaskForm):
