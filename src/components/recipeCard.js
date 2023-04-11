import React from "react";
import { Grid, Box, Paper, styled, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { fontSize } from "@mui/system";

function RecipeCard(props) {
    const { label, image, ingredients, tags, totalTime, calories, url, source } = props.data;

    const convertPrepTime = (totalTime) => {

        const time = parseInt(totalTime)

        if (time === 0) {
            return ` `
        } else if (time > 60) {
            let hours = Math.floor(time / 60);
            let minutes = time % 60;

            if (time % 60 === 0) {
                return `${hours}h`
            }
            return `${hours}h ${minutes} min`;
        } else {
            return `${time} min`
        }
    }

    return (
        <>
            <Box >
                <Grid>
                    <Card sx={{ width: 400, marginBottom: 2 }} >
                        <CardActionArea >
                            <CardMedia
                                component="img"
                                height="140"
                                image={image}
                                alt="recipeImage"
                            />
                            <CardContent sx={{ height: 260 }}>
                                <Typography gutterBottom variant="p" component="div" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    {label}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="div">
                                    <p>Calories: {Math.round(calories)}</p>
                                    <ul style={{ padding: 10 }} >
                                        {
                                            ingredients.slice(0, 5).map((ingredient, index) => (
                                                <li key={index}>{ingredient.text}</li>
                                            ))
                                        }
                                    </ul>
                                    <p style={{ color: 'orange' }}>Click to see more</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton onClick={() => { console.log('Icon Button clicked') }} >
                                <FavoriteIcon />
                            </IconButton>
                            {convertPrepTime(totalTime)}
                        </CardActions>
                    </Card>
                </Grid>
            </Box >
        </>
    );
}
export default RecipeCard;
