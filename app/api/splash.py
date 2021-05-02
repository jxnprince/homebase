from flask import Blueprint, redirect
from flask_login import current_user

splash_routes = Blueprint('splash', __name__)

# '/'
#If user logged out, renders version of page with associated nav bar (login/sign up/guest)
#If user logged in, redirects to "homebase/users/:id/teams/"
@splash_routes.route('/splash', methods=['GET'])
def get_home():
    if not current_user.is_authenticated:
        return redirect('/api/splash') #Actual route TBD
    else:
        'Success!'