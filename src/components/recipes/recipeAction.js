import axios from 'axios'
import API from '../../consts'
import localforage from 'localforage'
import uuid from 'uuid'
import firebase from '../../config/fbConfig'

const BASE_URL = API.API_URL

export const temp = () => {
  return {
    type: 'TEMP'
  }
}

const setRecipes = recipes => {
  return dispatch => {
    const recipeStore = localforage.createInstance({
      name: "recipes",
      storeName: 'recipes' // Should be alphanumeric, with underscores.
    });

    // update the recipes on the indexeddb
    recipeStore.setItem('recipes', recipes)
      .catch(error => console.log("IndexedDB Error: ", error))

    return dispatch({
      type: 'FETCH_RECIPES',
      payload: recipes
    })
  }
}

export const fetchRecipes = () => {
  return dispatch => {
    const recipeStore = localforage.createInstance({
      name: "recipes",
      storeName: 'recipes' // Should be alphanumeric, with underscores.
    });

    axios.get(`${BASE_URL}/recipes`)
      .then(res => {
        // saving data on IndexedDB
        recipeStore.setItem('recipes', res.data.data)
          .catch(error => console.log("IndexedDB Error: ", error))

        return dispatch({
          type: 'FETCH_RECIPES',
          payload: res.data.data
        })
      })
      .catch(error => {
        // failed to fetch recipes from API
        // retrieve data from IndexedDB
        recipeStore.getItem('recipes')
          .then(value => {
            return dispatch({
              type: 'FETCH_RECIPES',
              payload: value
            })
          })
          .catch(error => console.log("IndexedDB Error: ", error))
      })
  }
}

export const saveImage = (blob, blobName) => {
  return dispatch => {
    // create a storage ref
    const storageRef = firebase.storage().ref(blobName)

    // upload file
    const task = storageRef.put(blob)

    // upload progress bar
    task.on('state_changed', 
      function progress(snapshot) {
        
      },

      function error(err) {
        
      },

      function complete() {
        return dispatch(fetchRecipes())
      }
    );
  }
}

export const saveRecipe = recipe => {
  return (dispatch, getState) => {
    const requestStore = localforage.createInstance({
      name: 'requests',
      storeName: 'requests' // Should be alphanumeric, with underscores.
    })

    const options = {
      method: 'post',
      url: `${BASE_URL}/recipes`,
      data: {
        recipe
      }
    }

    axios(options)
      .then(res => {
        if(res.error) {
          throw new Error('Failed to save recipe: ', res.data)
        }

        return dispatch(fetchRecipes())
      })
      .catch(error => {
        requestStore.setItem(uuid.v4(), options)

        // update the recipes
        const recipes = [...getState().recipe.recipes, recipe]

        return dispatch(setRecipes(recipes))
      })
  }
}

export const deleteRecipeById = id => {
  return (dispatch, getState) => {
    const requestStore = localforage.createInstance({
      name: 'requests',
      storeName: 'requests' // Should be alphanumeric, with underscores.
    })
    
    const options = {
      method: 'delete',
      url: `${BASE_URL}/recipes/${id}`
    }
    
    axios(options)
      .then(res => {
        if(res.error) {
          throw new Error('Failed to delete recipe: ', res.data)
        }

        return dispatch(fetchRecipes())
      })
      .catch(error => {
        // store the request
        requestStore.setItem(uuid.v4(), options)

        // update the recipes
        const recipes = getState().recipe.recipes.filter(recipe => {
          return recipe.id !== id
        })        

        return dispatch(setRecipes(recipes))
      })
  }
}

export const clearRecipes = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_RECIPES'
    })
  }
}
