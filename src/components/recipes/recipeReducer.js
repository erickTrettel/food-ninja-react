const INITIAL_STATE = {
  recipe: {
    id: null,
    title: null,
    ingredients: null
  },
  recipes: []
}

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'FETCH_RECIPES':
      return {
        ...state,
        recipes: action.payload
      }
    case 'SET_RECIPE':
      return {
        ...state,
        recipe: action.payload
      }
    case 'CLEAR_RECIPES':
      return {
        ...state,
        recipe: {
          id: null,
          title: null,
          ingredients: null
        },
        recipes: []
      }
    default:
      return state
  }
}

export default recipeReducer
