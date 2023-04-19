import React, { useState, useEffect } from 'react';
import {
    Grid,
    Box,
    CardActions,
    IconButton,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RecipeDialog from './recipeDialog';

const API_KEY = process.env.REACT_APP_API_KEY_SPOONACULAR;

function RecipeCard(props) {
    const [recipeDetails, setRecipeDetails] = useState(null);

    const { id, title } = props.data;

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await fetch(
                    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
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
                setRecipeDetails(data);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    if (!recipeDetails) {
        return <div>Loading...</div>;
    }

    const { servings, readyInMinutes, extendedIngredients } = recipeDetails;

    return (
        <>
            <Box>
                <Grid>
                    <Card sx={{ width: 400, marginBottom: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={recipeDetails.image}
                                alt="recipeImage"
                            />
                            <CardContent sx={{ height: 260 }}>
                                <Typography
                                    gutterBottom
                                    variant="p"
                                    component="div"
                                    style={{ fontSize: 18, fontWeight: 'bold' }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    component="div"
                                >
                                    <p>Servings: {servings}</p>
                                    <p>
                                        Preparation time: {readyInMinutes}{' '}
                                        minutes
                                    </p>
                                    <h4>Ingredients:</h4>
                                    <ul style={{ padding: 10 }}>
                                        {extendedIngredients
                                            .slice(0, 5)
                                            .map((ingredient, index) => (
                                                <li key={index}>
                                                    {ingredient.amount}{' '}
                                                    {ingredient.unit}{' '}
                                                    {ingredient.name}
                                                </li>
                                            ))}
                                    </ul>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <RecipeDialog data={recipeDetails} />
                            <IconButton
                                style={{ color: 'red', marginLeft: 'auto' }}
                                onClick={() => {
                                    console.log('Icon Button clicked');
                                }}
                            >
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Box>
        </>
    );
}

export default RecipeCard;
