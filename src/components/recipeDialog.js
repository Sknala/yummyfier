import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from '@mui/material';

function RecipeDialog(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { title, extendedIngredients, readyInMinutes, servings, sourceUrl } =
        props.data;

    const instructions =
        props.data.analyzedInstructions &&
        props.data.analyzedInstructions.length > 0 &&
        props.data.analyzedInstructions[0].steps
            ? props.data.analyzedInstructions[0].steps
            : [];

    return (
        <div>
            <Button size="small" variant="text" onClick={handleClickOpen}>
                Click to see more
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText component="div">
                        <p>Preparation time: {readyInMinutes} minutes</p>
                        <p>Servings: {servings}</p>
                        <h4>Ingredients:</h4>
                        <ul style={{ padding: 10 }}>
                            {extendedIngredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.amount} {ingredient.unit}{' '}
                                    {ingredient.name}
                                </li>
                            ))}
                        </ul>
                        <h4>Instructions:</h4>
                        <ol>
                            {instructions.map((step, index) => (
                                <li
                                    key={index}
                                    dangerouslySetInnerHTML={{
                                        __html: step.step,
                                    }}
                                />
                            ))}
                        </ol>
                        <p>
                            Full recipe on{' '}
                            <Link
                                style={{ textDecoration: 'none' }}
                                href={sourceUrl}
                            >
                                {sourceUrl}
                            </Link>
                        </p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default RecipeDialog;
