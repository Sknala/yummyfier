import React, { useEffect, useState } from "react";
import { InputAdornment, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RecipeCard from "./recipeCard.js";
import "../styles/App.css";
import "../styles/recipe.css";

const APP_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_API_KEY;

function RecipeSearch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const [isRecipesEmpty, setIsRecipesEmpty] = useState(false)

  /* useEffect(() => {
    getRecipes();
  }, []); */

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  const placeholderText = loading
    ? "Loading, please wait..."
    : error
      ? `Problem fetching the recipe data: ${error}`
      : " ";

  // If recipes list is empty
  const recipesEmptyText = isRecipesEmpty
    ? console.log("Sorry, we didn't find what you're looking for. Please try something else.")
    : console.log("Search results: ")

  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setLoading(true)
      if (!response.ok) {
        throw new Error(`HTTP error: status is ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.hits);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      if (Array.isArray(recipes) && recipes.length === 0) {
        setIsRecipesEmpty(true)
      } else {
        setIsRecipesEmpty(false)
      }
    }
  };

  const searchRecipes = () => {
    getRecipes();

  };

  return (
    <>
      <div className="searchdiv">
        <form onSubmit={handleSearchSubmit}>
          <Input
            type="text"
            disableUnderline
            placeholder='Search e.g. chicken, rice, tomato...'
            className="searchbar"
            value={search}
            onChange={handleSearchChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon
                  className="searchicon"
                  style={{ fontSize: "40px" }}
                />
              </InputAdornment>
            }
          />
        </form>
      </div>
      <div style={{ color: 'var(--eggplant)', textAlign: 'center', fontSize: 20 }}>
        {placeholderText}
      </div>
      <div className="recipeList">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} data={recipe.recipe} />
        ))}
      </div>
    </>
  );
}
export default RecipeSearch;
