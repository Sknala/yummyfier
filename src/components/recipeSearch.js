import React, { useEffect, useState } from 'react';
import { InputAdornment, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RecipeCard from './recipeCard.js';
import '../styles/App.css';
import '../styles/recipe.css';

const API_KEY = process.env.REACT_APP_API_KEY_SPOONACULAR;

function RecipeSearch() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
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
        ? 'Please wait, loading...'
        : error
        ? `Problem fetching the recipe data: ${error}`
        : 'Search e.g. chicken, rice, tomato...';

    const getRecipes = async () => {
        try {
            const response = await fetch(
                `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${search}`,
                {
                    headers: {
                        'X-RapidAPI-Host':
                            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        'X-RapidAPI-Key': API_KEY,
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error: status is ${response.status}`);
            }
            const data = await response.json();
            setRecipes(data.results);
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
            <div className="searchdiv">
                <form onSubmit={handleSearchSubmit}>
                    <Input
                        type="text"
                        placeholder={placeholderText}
                        className="searchbar"
                        value={search}
                        onChange={handleSearchChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon
                                    className="searchicon"
                                    style={{ fontSize: '40px' }}
                                />
                            </InputAdornment>
                        }
                    />
                </form>
            </div>
            <div className="recipeList">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} data={recipe} />
                ))}
            </div>
        </>
    );
}
export default RecipeSearch;
