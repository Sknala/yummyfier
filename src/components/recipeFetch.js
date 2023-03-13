import React, { useEffect, useState } from "react";
import Recipe from "./recipe";

const APP_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_API_KEY;

function RecipeFetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: status is ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const searchRecipes = () => {
    getRecipes();
    setSearch("");
  };

  return (
    <>
      {loading && <div>Please wait, loading...</div>}
      {error && <div>{`Problem fetching the recipe data: ${error}`}</div>}
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          prepTime={recipe.recipe.totalTime}
          calories={recipe.recipe.calories}
          // servings={recipe.recipe.yield}
          url={recipe.recipe.url}
        />
      ))}
    </>
  );
}
export default RecipeFetch;
