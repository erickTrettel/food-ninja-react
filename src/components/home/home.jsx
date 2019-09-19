import React, { Component } from 'react'
import Recipe from '../recipes/recipe'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRecipes, saveRecipe } from '../recipes/recipeAction'

class Home extends Component {
  componentWillMount() {
    this.props.fetchRecipes()
  }
  
  handleSubmit = e => {
    e.preventDefault()

    const recipe = {
      title: e.target.title.value,
      ingredients: e.target.ingredients.value
    }

    this.props.saveRecipe(recipe)

    this.clearForm()
  }

  clearForm = () => {
    document.getElementById('title').value = ''
    document.getElementById('ingredients').value = ''
  }

  renderRecipes = () => {
    const recipes = this.props.recipe.recipes || []
    return recipes.map(recipe => {
      return (
        <Recipe key={recipe.id} 
          id={recipe.id} 
          title={recipe.title} 
          ingredients={recipe.ingredients}
          fetchRecipes={() => this.props.fetchRecipes()} />
      )
    })
  }

  render() {
    return (
      <div id="home">
        <div className="recipes container grey-text text-darken-1">
          <h6 className="center">Ninja Recipes</h6>
          {this.renderRecipes()}
        </div>
  
        <div className="center">
          <a className="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
            <i className="material-icons">add</i>
          </a>
        </div>
  
        <div id="side-form" className="sidenav side-form">
          <form className="add-recipe container section" onSubmit={this.handleSubmit}>
            <h6>New Recipe</h6>
            <div className="divider"></div>
            <div className="input-field">
              <input placeholder="e.g. Ninja soup" id="title" type="text" className="validate" />
              <label htmlFor="title">Recipe Title</label>
            </div>
            <div className="input-field">
              <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" className="validate" />
              <label htmlFor="ingredients">Ingredients</label>
            </div>
            <div className="input-field center">
              <button className="btn-small">Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    recipe: state.recipe
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchRecipes, saveRecipe }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
