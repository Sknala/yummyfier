import React, { useState } from "react";
import {
  Link,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function RecipeDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" variant="text" onClick={handleClickOpen}>
        Click to see more
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.label}</DialogTitle>
        <DialogContent>
          <DialogContentText component="div">
            <ul style={{ padding: 10 }}>
              {props.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            Step by step instructions in{" "}
            <Link style={{ textDecoration: "none" }} href={props.url}>
              {props.source}
            </Link>
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
