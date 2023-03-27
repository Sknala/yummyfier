import React from "react";

import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";

function Recipe(props) {
    const { label, image, ingredients, totalTime, calories, url } = props.data;
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div className="recipeContainer">
                <div className="recipeLabel">
                    {totalTime === 0 ? <p></p> : <p>{totalTime} min</p>}
                </div>
                <h1>{label}</h1>
                <div>
                    <div className="recipeImage">
                        <img className="img" src={image} alt="meal_picture" />
                    </div>
                    <div>
                        <ul className="ingredientList">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="recipeInfo">
                    <p>{Math.round(calories)} kcal</p>
                    <a href={url}>Check out instructions</a>
                </div>
            </div>
        </>
    );
}
export default Recipe;
