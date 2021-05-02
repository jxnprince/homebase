const LOAD_TASKS = "task/LOAD_TASKS"
const LOAD_TASK = "tasks/LOAD_TASK"
const ADD_TASK = "tasks/ADD_TASK"
const EDIT_TASK = "tasks/EDIT_TASK"
const REMOVE_TASK = "tasks/REMOVE_TASK"


const loadTasks = (tasks) => {
  return {
    type: LOAD_TASKS,
    tasks: tasks 
  }
};

const loadTask = (task) => {
  return {
    type: LOAD_TASK,
    task: task
  }
};

const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

const updateTask = (task) => ({
  type: EDIT_TASK,
  payload: task
});

const removeTask = (task) =>({
  type: REMOVE_TASK,
  payload: task
});


export const getTasks = (projectId) => async dispatch => {
  const response = await fetch(`/api/tasks/projects/${projectId}`)
      if(response.ok) {
        const tasks = await response.json()
        dispatch(loadTasks(tasks))
  } else throw response
};

export const getTask = (taskId) => async dispatch => {
  const response = await fetch(`/api/tasks/${taskId}`)
      // console.log(response.body, "=================")
      if(response.ok) {
        const task = await response.json()
        dispatch(loadTask(task))
  } else throw response
};

export const postTask = (projectId, payload) => async dispatch => {
  const response = await fetch(`/api/tasks/projects/${projectId}/create`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF8"
    },
    body: JSON.stringify(payload)
  })
  // console.log(projectId, payload, '========================')
  if (response.ok){
    const task = await response.json();
    dispatch((addTask(task)))
  return task
  } else throw response
};

export const editTask = (projectId, payload) => async dispatch => {
  const response = await fetch(`/api/tasks/projects/${projectId}/edit`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF8"
    }
  })
  if (response.ok){
  const task = await response.json();
  dispatch((addTask(task)))
  return task
}else throw response
}

export const deleteTask = (taskId) => async dispatch =>{
  const response = await fetch(`/api/tasks/${taskId}/delete`,{
    method: 'DELETE',
  });
  if (response.ok){
    const task = response.json()
    dispatch(removeTask(task))
    return task
  }else throw response
}

const initialState = {tasks: null, task: null};

const TasksReducer = (state = initialState, action) =>{
  let newState;
  switch (action.type) {
    case LOAD_TASK:
      newState = Object.assign({},state);
      newState.task = action.task
      return newState;

    case LOAD_TASKS:
      newState = Object.assign({},state);
      newState.tasks = action.tasks
      return newState;

    case ADD_TASK:
      newState = Object.assign({}, state);
      newState.task = action.payload
      return newState;

    case EDIT_TASK:
      newState = Object.assign({}, state);
      newState.task = action.payload
      return newState;

    case REMOVE_TASK:
      newState = Object.assign({}, state);
      newState.task = action.payload
      return newState;
        default:
      return state;
  }
}

export default TasksReducer