import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteRecipeById } from './recipeAction'

import firebase from '../../config/fbConfig'

class Recipe extends Component {
  componentWillMount() {
    this.loadRecipeImg()
  }

  loadRecipeImg = () => {
    const { id, image } = this.props.recipe
    const imgId = 'img-' + id

    if(image) {
      const storageRef = firebase.storage().ref(image)

      storageRef.getDownloadURL()
        .then(url => {
          document.getElementById(imgId).src = url
        })
        .catch(error => console.log("Failed to get image: ", error))
    }
  }

  deleteRecipe = id => {
    this.props.deleteRecipeById(id)
    this.props.fetchRecipes()
  }

  render() {
    const { id, title, ingredients } = this.props.recipe

    return (
      <div className="card-panel recipe white row" data-id={id}>
        <img id={'img-' + id} src="/img/dish.png" alt="recipe thumb" />
        <div className="recipe-details">
          <div className="recipe-title">{title}</div>
          <div className="recipe-ingredients">{ingredients}</div>
        </div>
        <div className="recipe-delete">
          <i className="material-icons" data-id={id}
            style={{ cursor: 'pointer' }}
            onClick={() => this.deleteRecipe(id)}>delete_outline</i>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteRecipeById }, dispatch)
}

export default connect(null, mapDispatchToProps)(Recipe)
