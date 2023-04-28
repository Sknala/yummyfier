import React, { useState, useEffect } from "react";
import {
  CardActions,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RecipeDialog from "./recipeDialog";
import FormatPrepTime from "./formatPrepTime";

import "../styles/recipe.css";

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
              "X-RapidAPI-Host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
              "X-RapidAPI-Key": API_KEY,
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
    return <div></div>;
  }

  const { servings, readyInMinutes, extendedIngredients } = recipeDetails;

  // See Card styles in recipe.css
  return (
    <>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={recipeDetails.image}
            alt="recipeImage"
          />
          <CardContent className="cardContent">
            <Typography
              gutterBottom
              variant="p"
              component="div"
              style={{ fontSize: 18, fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <p>Servings: {servings}</p>
              <h4 style={{ margin: 0, padding: 0 }}>Ingredients:</h4>
              <ul style={{ marginLeft: 0, paddingLeft: 20 }}>
                {extendedIngredients.slice(0, 5).map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.amount % 1 === 0
                      ? ingredient.amount
                      : ingredient.amount.toFixed(1)}{" "}
                    {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <RecipeDialog data={recipeDetails} />
          <Typography style={{ marginLeft: "auto" }}>
            {/* Formatting over 60 minutes preparation time to hours and minutes */}
            {FormatPrepTime({ readyInMinutes })}
          </Typography>
          <IconButton
            style={{ color: "red", marginLeft: "auto" }}
            onClick={() => {
              console.log("Icon Button clicked");
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
export default RecipeCard;
