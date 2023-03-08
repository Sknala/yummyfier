// Test components folder and file
import React, { useState } from 'react';
import './header.css';
import '../App.css'
import LogIn from './logIn';
import CreateUser from './createUser';
import SearchBox from './searchBox'

export default function Header() {
    return (
        <div className="container">
            <LogIn />
            <CreateUser />
            <div className="header">
                Yummyfier.
            </div>
        </div>
    );

}