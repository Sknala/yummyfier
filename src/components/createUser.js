import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "../styles/App.css";

export default function CreateUser() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" id="createUser" onClick={handleClickOpen}>
        Create User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "#614051", fontWeight: "bold" }}>
          Create new User
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill your information</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="username"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleClose}>Create new User</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
