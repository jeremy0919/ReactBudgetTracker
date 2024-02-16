import React, { createContext, useState, useContext } from 'react';

const OrderCurr = createContext();

export const OrderProvider = ({ children }) => {
    const [currOrder, setCurrOrder] = useState("AlphabeticalAscending"); // Initialize currPage to 1

    return (
        <OrderCurr.Provider value={{ currOrder, setCurrOrder }}>
            {children}
        </OrderCurr.Provider>
    );
};

export const useOrderContext = () => useContext(OrderCurr);
