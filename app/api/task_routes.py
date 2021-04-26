#"homebase/users/:id/teams/:id/projects/:id/tasks/create"
# POST - appears on project page in form modal


#"homebase/users/:id/teams/:id/projects/:id/tasks/:id"
#GET 
#Render all information about a singular task as well as host edit and delete buttons

#"homebase/users/:id/teams/:id/projects/:id/tasks/"
#GET 
#Render ten tasks organized by due date decending** (DUE SOONEST FIRST)

#"homebase/users/:id/teams/:id/projects/:id/tasks/:id"
#Patch 
#renders a modal with a form for creating a task with prepopulated forms.

#"homebase/users/:id/teams/:id/projects/:id/tasks/:id"
#Delete 
    #Set tasks.assignedUserId to Null
    #Delete's specified task