import React, { useState, useEffect } from "react";
import { InputAdornment, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RecipeCard from "./recipeCard.js";
import "../styles/App.css";
import "../styles/recipe.css";
import { useToggleSloganContext } from "../AppContext.js";

const API_KEY = process.env.REACT_APP_API_KEY_SPOONACULAR;

function RecipeSearch() {
  const [loading, setLoading] = useState(false);
  const [dietaryRequirement, setDietaryRequirement] = useState("");
  const [diet, setDiet] = useState("");
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [noResults, setNoResults] = useState(false);
  const { data, setData } = useToggleSloganContext();

  const hideSlogan = () => {
    setData({
      ...data,
      showSlogan: false,
    });
  };


  const handleButtonClick =  (event) => {
    event.preventDefault();
    const buttonName = event.target.name;
    getRecipes(buttonName);
  }


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    hideSlogan();
    searchRecipes();
  };

  const placeholderText = loading
    ? "Loading, please wait..."
    : error
    ? `There was a problem getting the recipes. Please try again.`
    : " ";

  const getRecipes = async (buttonName) => {
    setLoading(true);
    try {
      const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${search}&number=10&offset=0`;
      let dietParam = buttonName === "vegan" || buttonName === "gluten-free" || buttonName === "vegetarian" ? `&diet=${buttonName}` : `&type=${buttonName}`;
      const response = await fetch(url + dietParam,  {
        headers: {
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "X-RapidAPI-Key": API_KEY,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error: status is ${response.status}`);
      }
      const data = await response.json();
      if (data.results.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        setRecipes(data.results);
        console.log("We are here recipes!")
        console.log({recipes})
        console.log({noResults})
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
    

  const searchRecipes = () => {
    getRecipes();
  };

  return (
    <>
      <div className="recipe-container">
        <div className="searchdiv">
          <form onSubmit={handleSearchSubmit}>
            <Input
              type="text"
              disableUnderline
              placeholder="Search e.g. chicken, rice, tomato..."
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
        <div
          style={{
            color: "var(--eggplant)",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          {placeholderText}
        </div>
        <div className="sortdiv">
  <button className="sortbutton" name="vegan" onClick={handleButtonClick}>
    Vegan
  </button>
  <button className="sortbutton" name="gluten-free" onClick={handleButtonClick}>
    Gluten-Free
  </button>
  <button className="sortbutton" name="vegetarian" onClick={handleButtonClick}>
    Vegetarian
  </button>
  <button className="sortbutton" name="dessert" onClick={handleButtonClick}>
    Dessert
  </button>
  <button className="sortbutton" name="breakfast" onClick={handleButtonClick}>
    Breakfast
  </button>
  <button className="sortbutton" name="drink" onClick={handleButtonClick}>
    Drink
  </button>
</div>
      </div>
      <div className="recipeList">
        {!noResults ? (
          recipes.map((recipe) => <RecipeCard key={recipe.id} data={recipe} />)
        ) : (
          <div
            style={{
              color: "var(--eggplant)",
              fontSize: 20,
            }}
          >
            Sorry, no recipes found. Please try another ingredient.
          </div>
        )}
      </div>
    </>
  );
}
export default RecipeSearch;
