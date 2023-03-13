import React from "react";

function Recipe(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      {props.prepTime === 0 ? <p></p> : <p>{props.prepTime} min</p>}
      {/* <p>{props.yield}</p> */}
      <img src={props.img} alt="" />
      <a href={props.url}>Check out instructions</a>
    </>
  );
}
export default Recipe;
