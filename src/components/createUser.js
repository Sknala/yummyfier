import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
} from "@mui/material";
import "../styles/App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function CreateUser() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        return setErrorMsg("Passwords do not match");
      }
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
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
          {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="confirmPass"
            label="Confirm password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleRegister}>Create new User</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
