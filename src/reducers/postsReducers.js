export default (state = { all: [], post: null }, action ) => {
  
  switch (action.type) {

    case 'FETCH_POSTS':
      return { ...state, all: action.payload.data }
    
    case 'FETCH_POST':
      return { ...state, post: action.payload.data }

    case 'DELETE_POST':
      let deleted_id = action.payload.data.id

      let all = state.all.filter( post => post.id !== deleted_id); //return posts don't match d_id

      return { ...state, all }
    default: 
      return state
  }
}