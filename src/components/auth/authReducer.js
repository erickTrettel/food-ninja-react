const INITIAL_STATE = {
  isAuthenticated: localStorage.getItem('user') ? true : false,
  user: JSON.parse(localStorage.getItem('user')) || null
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state
  }
}

export default authReducer