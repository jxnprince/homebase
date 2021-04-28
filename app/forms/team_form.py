from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
# from ..widgets import html5 as widgets
# from . import core


# class SearchField(core.StringField):
#     """
#     Represents an ``<input type="search">``.
#     """
#     widget = widgets.SearchInput()


class TeamForm(FlaskForm):
    teamName = StringField('Team Name', validators=[DataRequired()])
    submit = SubmitField('Add Team')
