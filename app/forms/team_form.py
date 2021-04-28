from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.fields.html import SearchField, SearchForm
from wtforms.validators import DataRequired
# from ..widgets import html5 as widgets
# from . import core


class SearchForm(FlaskForm):
    userSearch = SearchField()


class TeamForm(FlaskForm):
    teamName = StringField('Team Name', validators=[DataRequired()])
    submit = SubmitField('Add Team')
