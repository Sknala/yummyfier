import React, { useState } from 'react';
import { InputAdornment, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RecipeCard from './recipeCard.js';
import '../styles/App.css';
import '../styles/recipe.css';
import { useToggleSloganContext } from '../AppContext.js';

const API_KEY = process.env.REACT_APP_API_KEY_SPOONACULAR;

function RecipeSearch() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [noResults, setNoResults] = useState(false);
    const { data, setData } = useToggleSloganContext();

    const hideSlogan = () => {
        setData({
            ...data,
            showSlogan: false,
        });
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        hideSlogan();
        searchRecipes();
    };

    const placeholderText = loading
        ? 'Loading, please wait...'
        : error
        ? `There was a problem getting the recipes. Please try again.`
        : ' ';

    const getRecipes = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${search}&number=10&offset=0`,
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
            if (data.results.length === 0) {
                setNoResults(true);
            } else {
                setNoResults(false);
                setRecipes(data.results);
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
                                    style={{ fontSize: '40px' }}
                                />
                            </InputAdornment>
                        }
                    />
                </form>
            </div>
            <div
                style={{
                    color: 'var(--eggplant)',
                    textAlign: 'center',
                    fontSize: 20,
                }}
            >
                {placeholderText}
            </div>
            <div className="recipeList">
                {!noResults ? (
                    recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} data={recipe} />
                    ))
                ) : (
                    <div
                        style={{
                            color: 'var(--eggplant)',
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
