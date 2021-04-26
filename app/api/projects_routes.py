#"homebase/users/:id/teams/:id/projects/:id"
#GET 
#renders project, team members associated, tasks, and the messageboard associated with the project

#"homebase/users/:id/teams/:id/projects/"
#POST 
#renders a modal with a form for creating a project.  Appears on team page

#"homebase/users/:id/teams/:id/projects/:id/delete"
#Delete 
    # all associated tasks.projectId 
    # messageboard comments.projectId
    # Deletes selected Project

#"homebase/users/:id/teams/:id/projects/:id/edit"
#PATCH 
#renders a modal with a form for creating a project with prepopulated forms.

#"homebase/users/:id/teams/:id/projects/:id/comments"
#POST 
#Posts a comment to the message board with timestamp

#"homebase/users/:id/teams/:id/projects/:id/comments/:id/delete"
#DELETE
#Deletes a comment from the message board