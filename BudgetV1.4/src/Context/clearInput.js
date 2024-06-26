import React, { createContext, useState, useContext } from 'react';

const clearInput = createContext();

export const ClearInputProvider = ({ children }) => {
    const [shouldClear, updateClear] = useState(true); 

    return (
        <clearInput.Provider value={{ shouldClear, updateClear }}>
            {children}
        </clearInput.Provider>
    );
};

export const useClearProvider = () => useContext(clearInput);
