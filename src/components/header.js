// Test components folder and file
import React from "react";
import "../styles/header.css";
import "../styles/App.css";
import LogIn from "./logIn";
import CreateUser from "./createUser";

export default function Header() {
  return (
    <div className="container">
      <LogIn />
      <CreateUser />
      <div className="header" data-testid="header">Yummyfier.</div>
    </div>
  );
}
