// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [isGraphicVisible, setIsGraphicVisible] = useState({Graphic1: false, GraphicPrint: false});

    return (
        <MyContext.Provider value={{ isGraphicVisible, setIsGraphicVisible }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);
