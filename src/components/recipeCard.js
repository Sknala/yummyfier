import React from "react";
import { Grid, Box, Paper, styled, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { fontSize } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
}));

function RecipeCard(props) {
    const { label, image, ingredients, tags, totalTime, calories, url, source } = props.data;
    return (
        <>
            <Box sx={{ flexGrow: 10 }}>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={1}>
                        <Card sx={{ width: 300, marginBottom: 2 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={image}
                                    alt="recipeImage"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                        {label}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {totalTime === 0 ? <p></p> : <p>{totalTime} min</p>}
                                        <p>Calories: {Math.round(calories)}</p>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton >
                                    <FavoriteIcon />
                                </IconButton>
                                {totalTime === 0 ? <p></p> : <p style={{ marginLeft: 180 }}>{totalTime} min</p>}
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default RecipeCard;
