import React from "react";

function EdamamRecipe(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{props.prepTime} min</p>
      <img src={props.img} alt="" />
    </>
  );
}
export default EdamamRecipe;
