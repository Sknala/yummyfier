import { InputAdornment, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import '../App.css'


export default function searchBox() {




    return (
   <div className="searchdiv">
      <Input
        type="text"
        placeholder="Search for a recipe by ingredient"
        className="searchbar"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon className="searchicon" style={{ fontSize: '40px'}}/>
          </InputAdornment>
        }
          />
         
    </div>
    );

}