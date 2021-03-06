import React, { Component } from 'react'
import Recipe from '../recipes/recipe'
import uuid from 'uuid'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRecipes, saveRecipe, saveImage } from '../recipes/recipeAction'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  componentWillMount() {
    this.props.fetchRecipes()
  }
  
  handleSubmit = e => {
    e.preventDefault()

    const file = e.target.file.files[0]
    let blobName

    if(file) {
      const fileExtension = this.getFileExtension(file.name)
      blobName = 'recipes_imgs/' + uuid.v4() + fileExtension
      this.props.saveImage(e.target.file.files[0], blobName)
    }

    const recipe = {
      title: e.target.title.value,
      ingredients: e.target.ingredients.value,
      image: blobName || null
    }

    this.props.saveRecipe(recipe)
    this.clearForm()
  }

  getFileExtension(fileName) {
    return fileName.substring(fileName.lastIndexOf('.'))
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
          recipe={recipe}
          fetchRecipes={() => this.props.fetchRecipes()} />
      )
    })
  }

  toggleMenu = () => {
    this.setState({
      ...this.state,
      isHidden: !this.state.isHidden
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
            <i className="material-icons" onClick={this.toggleMenu}>add</i>
          </a>
        </div>
  
        <div id="side-form" className="sidenav sidenav-animation side-form" style={{ transform: this.state.isHidden ? 'translateX(-105%)' : 'translateX(0%)' }}>
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
            <h6>Image</h6>
            <div className="divider"></div>
            <div className="input-field">
              <input type="file" id="file" className="form-control" />
            </div>
            <div className="input-field center">
              <button className="btn-small">Add</button>
            </div>
          </form>
        </div>

        <div className="sidenav-overlay" style={{ 
            display: this.state.isHidden ? 'none' : 'block',
            opacity: this.state.isHidden ? '0' : '1' }}
            onClick={this.toggleMenu}></div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    recipe: state.recipe
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRecipes, 
  saveRecipe, 
  saveImage 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
