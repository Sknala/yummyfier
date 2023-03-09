import React, { useEffect, useState } from "react";
import EdamamRecipe from "./EdamamRecipe";

const APP_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_API_KEY;

function EdamamRecipeFetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  // fetching recipes that contain potatoes, q=potato
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: status is ${response.status}`);
      }
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    } catch (err) {
      // console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Recipes</h1>
      {loading && <div>Please wait, loading...</div>}
      {error && <div>{`Problem fetching the recipe data: ${error}`}</div>}
      {recipes.map((recipe) => (
        <EdamamRecipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          prepTime={recipe.recipe.totalTime}
        />
      ))}
    </>
  );
}
export default EdamamRecipeFetch;
