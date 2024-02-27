import React, { createContext, useState, useContext } from 'react';

const CheckedItems = createContext();

export const CheckedProvider = ({ children }) => {
    const [itemsChecked, updateCheckedItems] = useState([]); // Initialize currPage to 1

    return (
        <CheckedItems.Provider value={{ itemsChecked, updateCheckedItems }}>
            {children}
        </CheckedItems.Provider>
    );
};

export const useCheckedContext = () => useContext(CheckedItems);
