import { combineReducers } from 'redux'

import recipeReducer from '../recipes/recipeReducer'
import authReducer from '../auth/authReducer'

export default combineReducers({
  recipe: recipeReducer,
  auth: authReducer
})
