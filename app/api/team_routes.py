# "homebase/users/:id/teams/"
#GET
#render all projects that belong to the team as well as all members of the team

# "homebase/users/:id/teams/"
#POST
#Via a modal posts a form that creates a new team that includes the user that created it as well as all form data
#Redirects to "homebase/users/:id/teams/:id" to view the newly created team

# "homebase/users/:id/teams/:id/delete"
# DELETE route
# Alert window check confirms before deleting
    #for each project
        # all associated tasks.projectId 
        # messageboard comments.projectId
        # Deletes selected Project
    #Deletes all mentions of selected team in usersOnTeam.teamId
    #Deletes Selected team