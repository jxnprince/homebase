

#homebase/user/:id
#GET
#render dashboard that displays profile card, list of teams, list of projects


#STRETCH GOALS
#homebase/user/:id/edit
#homebase/user/:id/delete
    #Deletes all comments made by the user.id
    #Deletes the user and goes to tasks.assignedUserId and sets it to Null
    #Deletes them from all mentions in usersOnTeams.userId and associated columns in teams.usersId