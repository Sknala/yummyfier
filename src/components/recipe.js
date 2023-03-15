import React from "react";

function Recipe(props) {
  const { label, image, ingredients, totalTime, calories, url } = props.data;
  return (
    <>
      <h1>{label}</h1>
      <img src={image} alt="meal_picture" />
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      {totalTime === 0 ? <p></p> : <p>{totalTime} min</p>}
      <p>{Math.round(calories)} kcal</p>

      <a href={url}>Check out instructions</a>
    </>
  );
}
export default Recipe;
