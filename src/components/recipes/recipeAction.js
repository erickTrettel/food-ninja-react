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
        dispatch({
          type: 'FETCH_RECIPES',
          payload: res.data.data
        })
      })
      .catch(error => console.log("Failed to fetch recipes: ", error))
  }
}

export const clearRecipes = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_RECIPES'
    })
  }
}
