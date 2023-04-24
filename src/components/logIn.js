import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

import "../styles/App.css";

export default function LogIn() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {!user ? (
        <Button id="logIn" variant="text" onClick={handleClickOpen}>
          Log In
        </Button>
      ) : (
        <Button id="logOut" variant="text" onClick={handleLogOut}>
          Log Out {user.email}
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "#614051", fontWeight: "bold" }}>
          Log In
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Please Log In</DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleLogin}>Log In</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
