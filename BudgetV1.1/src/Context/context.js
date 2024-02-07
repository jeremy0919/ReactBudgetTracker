// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [isGraphicVisible, setIsGraphicVisible] = useState(false);

    return (
        <MyContext.Provider value={{ isGraphicVisible, setIsGraphicVisible }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);
