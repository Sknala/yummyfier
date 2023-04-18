import React, { useEffect, useState } from "react";
import { InputAdornment, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RecipeCard from "./recipeCard.js";
import "../styles/App.css";
import "../styles/recipe.css";
import {Button} from "@mui/material";

const APP_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_API_KEY;

function RecipeSearch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    getRecipes();
  }, []);

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


      const handleSortClick = () => {
        setSorted(!sorted);
      };

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
  };

  const sortedRecipes = sorted
  ? [...recipes].sort((a, b) => {
      const recipeA = a.recipe.label.toLowerCase();
      const recipeB = b.recipe.label.toLowerCase();
      if (recipeA < recipeB) {
        return -1;
      }
      if (recipeA > recipeB) {
        return 1;
      }
      return 0;
    })
  : recipes;

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
      <p id="recipeFetchError">{placeholderText}</p>
      <div className="sortdiv">
      <button className="sortbutton" onClick={handleSortClick}>{sorted ? "Unsort" : "Sort"}</button>
      <button className="sortbutton" onClick={handleSortClick}>{sorted ? "Unsort" : "Sort"}</button>
      <button className="sortbutton" onClick={handleSortClick}>{sorted ? "Unsort" : "Sort"}</button>
      <button className="sortbutton" onClick={handleSortClick}>{sorted ? "Unsort" : "Sort"}</button>
      <button className="sortbutton" onClick={handleSortClick}>{sorted ? "Unsort" : "Sort"}</button>'
      </div>
      <div className="recipeList">
        {sortedRecipes.map((recipe, index) => (
          <RecipeCard key={index} data={recipe.recipe} />
        ))}
      </div>
    </>
  );
}
export default RecipeSearch;
