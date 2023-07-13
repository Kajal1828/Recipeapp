import React, { PureComponent } from 'react'
import './Recipe.scss'

export class RecipeComponents extends PureComponent {
  render(){
    const { item , id} = this.props;
    return (
        <>
        {!item ? (
          ""
        ) : (
          <div className="content">
            <img src={item.strMealThumb} alt="" />
            <div className="inner-content">
              <h1>{item.strMeal}</h1>
              <h2>{item.strArea} Food</h2>
              <h3>Category {item.strCategory}</h3>
            </div>

            <div className="recipe-details">
              <div className="ingredients">
                <h2>Ingredients</h2>
                <br />
                <h4>
                  {item.strIngredient1}: {item.strMeasure1}
                </h4>
                <h4>
                  {item.strIngredient2}: {item.strMeasure2}
                </h4>
                <h4>
                  {item.strIngredient3}: {item.strMeasure3}
                </h4>
                <h4>
                  {item.strIngredient4}: {item.strMeasure4}
                </h4>
                <h4>
                  {item.strIngredient5}: {item.strMeasure5}
                </h4>
                <h4>
                  {item.strIngredient6}: {item.strMeasure6}
                </h4>
                <h4>
                  {item.strIngredient7}: {item.strMeasure7}
                </h4>
                <h4>
                  {item.strIngredient8}: {item.strMeasure8}
                </h4>
              </div>
              <div className="instructions">
                <h2>Instructions</h2>
                <br />
                <h4>{item.strInstructions}</h4>
              </div>
            </div>
            <div className="video">
              <iframe
                width="100%"
                height="515"
                title="recipeVideo"
                src={`https://www.youtube.com/embed/${id}`}
              ></iframe>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default RecipeComponents