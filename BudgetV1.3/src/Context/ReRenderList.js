import React, { createContext, useState, useContext } from 'react';

const RenderList = createContext();

export const RenderListProvider = ({ children }) => {
    const [amRendering, setAmRendering] = useState(false); // Initialize currPage to 1

    return (
        <RenderList.Provider value={{ amRendering, setAmRendering }}>
            {children}
        </RenderList.Provider>
    );
};

export const useRenderContext = () => useContext(RenderList);
