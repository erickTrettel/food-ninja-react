import axios from 'axios'
import API from '../../consts'

const BASE_URL = API.API_URL

export const temp = () => {
  return {
    type: 'TEMP'
  }
}

export const fetchRecipes = () => {
  return dispatch => {
    axios.get(`${BASE_URL}/recipes`)
      .then(res => {
        return dispatch({
          type: 'FETCH_RECIPES',
          payload: res.data.data
        })
      })
      .catch(error => console.log("Failed to fetch recipes: ", error))
  }
}

export const saveRecipe = recipe => {
  return dispatch => {
    axios.post(`${BASE_URL}/recipes`, { recipe })
      .then(res => {
        if(res.error) {
          throw new Error('Failed to save recipe: ', res.data)
        }

        return dispatch(fetchRecipes())
      })
      .catch(error => console.log("Failed to save recipe: ", error))
  }
}

export const deleteRecipeById = id => {
  return dispatch => {
    axios.delete(`${BASE_URL}/recipes/${id}`)
      .then(res => {
        if(res.error) {
          throw new Error('Failed to delete recipe: ', res.data)
        }

        return dispatch(fetchRecipes())
      })
      .catch(error => console.log("Failed to delete recipe: ", error))
  }
}

export const clearRecipes = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_RECIPES'
    })
  }
}
