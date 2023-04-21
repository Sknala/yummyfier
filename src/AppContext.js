//this halped https://dev.to/clickpesa/react-manage-state-using-context-api-with-usestate-or-usereducer-hooks-d5l

import React, { createContext, useContext, useState } from "react"

export const ToggleSloganContext = createContext();

export const ToggleSloganProvider = ({ children }) => {
    // the value passed in here will be accessible anywhere in our application 
    // you can pass any value, in our case we pass our state and it's update method 
    const[data, setData] = useState({
        showSlogan: true,
    });
    
    return(
        <ToggleSloganContext.Provider value={{data, setData}}>
            {children}
        </ToggleSloganContext.Provider>
    );
};

export const useToggleSloganContext = () => useContext(ToggleSloganContext);
// useToggleContext will be used to use and update state accross the app
// we can access to data and setData using this method 
// anywhere in any component that's inside ToggleProvider