// Test components folder and file
import React, { useState } from 'react';
import './header.css';
import CreateUser from './createUser';
import LogIn from './logIn';


export default function Headerbar() {
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