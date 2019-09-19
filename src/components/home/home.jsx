import React from 'react'
import Recipe from '../recipes/recipe'

const Home = () => {
  return (
    <div id="home">
      <div className="recipes container grey-text text-darken-1">
        <h6 className="center">Ninja Recipes</h6>

        <Recipe id="1" title="Ninja soup" ingredients="Mushrooms, garlic" />
        <Recipe id="2" title="Ninja stew" ingredients="Tofu, mushrooms, garlic" />
        <Recipe id="3" title="Ninja bread" ingredients="Bread, butter" />
      </div>

      <div className="center">
        <a className="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
          <i className="material-icons">add</i>
        </a>
      </div>

      <div id="side-form" className="sidenav side-form">
        <form className="add-recipe container section">
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

export default Home
