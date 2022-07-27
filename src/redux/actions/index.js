export const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date(),
      data: data
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}