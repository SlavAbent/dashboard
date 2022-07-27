const initialState = {
  list: []
}

export default  (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const {id, data} = action.payload
      return {
        ...state,
        data: [
          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      }
    case 'DELETE_TODO':
      const newList = state.list.filter(elem => elem.id !== action.payload)
      return {
        ...state,
        list: newList
      }
    case 'TOGGLE_TODO':
      const item = state.list.findIndex(elem => elem.id === action.payload.id)
      state[item].completed = action.payload.completed
    default: return state
  }
}
