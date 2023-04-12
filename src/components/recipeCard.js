import React from "react";
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

function RecipeCard(props) {
  const { label, image, ingredients, totalTime, calories, url, source } =
    props.data;

  const convertPrepTime = (totalTime) => {
    const time = parseInt(totalTime);

    if (time === 0) {
      return ` `;
    } else if (time > 60) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;

      if (time % 60 === 0) {
        return `${hours}h`;
      }
      return `${hours}h ${minutes} min`;
    } else {
      return `${time} min`;
    }
  };

  return (
    <>
      <Card sx={{ width: 400, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="recipeImage"
          />
          <CardContent sx={{ height: 260 }}>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              style={{ fontSize: 18, fontWeight: "bold" }}
            >
              {label}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <p>Calories: {Math.round(calories)}</p>
              <ul style={{ padding: 10 }}>
                {ingredients.slice(0, 5).map((ingredient, index) => (
                  <li key={index}>{ingredient.text}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <RecipeDialog
            label={label}
            ingredients={ingredients}
            source={source}
            url={url}
          />
          <Typography style={{ marginLeft: "auto" }}>
            {convertPrepTime(totalTime)}
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
