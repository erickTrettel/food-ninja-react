import axios from 'axios'
import API from '../../consts'

const BASE_URL = API.API_URL

export const temp = () => {
  return {
    type: 'TEMP'
  }
}

export const login = (user) => {
  return dispatch => {
    if(!user.email) {
      alert("Digite seu email")
      return dispatch(temp())
    }

    if(!user.password) {
      alert("Digite sua senha")
      return dispatch(temp())
    }

    axios.post(`${BASE_URL}/auth`, { user })
      .then(res => {
        return dispatch({
          type: 'LOGIN',
          payload: res.data.data
        })
      })
      .catch(error => {
        console.log("Failed to login: ", error)
        return dispatch(temp())
      })
  }
}

export const logout = () => {
  return dispatch => {
    return dispatch({
      type: 'LOGOUT'
    })
  }
}
