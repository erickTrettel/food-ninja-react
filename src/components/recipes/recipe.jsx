import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteRecipeById } from './recipeAction'

class Recipe extends Component {
  deleteRecipe = id => {
    this.props.deleteRecipeById(id)
    this.props.fetchRecipes()
  }

  render() {
    const { id, title, ingredients } = this.props

    return (
      <div className="card-panel recipe white row" data-id={id}>
        <img src="/img/dish.png" alt="recipe thumb" />
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
