import React, { createContext, useState, useContext } from 'react';

const PageNumber = createContext();

export const PageProvider = ({ children }) => {
    const [currPage, setCurrPage] = useState(5); // Initialize currPage to 1

    return (
        <PageNumber.Provider value={{ currPage, setCurrPage }}>
            {children}
        </PageNumber.Provider>
    );
};

export const usePageContext = () => useContext(PageNumber);
