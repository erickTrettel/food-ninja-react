import { combineReducers } from 'redux'

import recipeReducer from '../recipes/recipeReducer'

export default combineReducers({
  recipe: recipeReducer
})
