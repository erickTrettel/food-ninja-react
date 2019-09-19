import React from 'react'

const Recipe = props => {
  const { id, title, ingredients } = props

  return (
    <div className="card-panel recipe white row" data-id={id}>
      <img src="/img/dish.png" alt="recipe thumb" />
      <div className="recipe-details">
        <div className="recipe-title">{title}</div>
        <div className="recipe-ingredients">{ingredients}</div>
      </div>
      <div className="recipe-delete">
        <i className="material-icons" data-id={id}>delete_outline</i>
      </div>
    </div>
  )
}

export default Recipe
