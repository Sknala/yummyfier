import React from "react";
import "../styles/recipe.css";

function Recipe(props) {
  const { label, image, ingredients, totalTime, calories, url } = props.data;
  return (
    <>
      <div className="recipeContainer">
        <div className="recipeLabel">
          {totalTime === 0 ? <p></p> : <p>{totalTime} min</p>}
        </div>
        <h1>{label}</h1>
        <div>
          <div className="recipeImage">
            <img className="img" src={image} alt="meal_picture" />
          </div>
          <div>
            <ul className="ingredientList">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="recipeInfo">
          <p>{Math.round(calories)} kcal</p>
          <a href={url}>Check out instructions</a>
        </div>
      </div>
    </>
  );
}
export default Recipe;
