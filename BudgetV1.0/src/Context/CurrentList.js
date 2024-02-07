// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const ListProvider = ({ children }) => {
    const [CurrentList, ChangeList] = useState("All");

    return (
        <MyContext.Provider value={{ CurrentList, ChangeList }}>
            {children}
        </MyContext.Provider>
    );
};

export const useListContext = () => useContext(MyContext);
