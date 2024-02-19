// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const AccountProvidor = ({ children }) => {
    const [accountInfo, updateAccountInfo] = useState({UserName: "jeremy", Email:"Unknown", Language:"English", Signedin: false, Budget:1000, CurrentList:"All" });

    return (
        <MyContext.Provider value={{ accountInfo, updateAccountInfo }}>
            {children}
        </MyContext.Provider>
    );
};

export const useAccountContext = () => useContext(MyContext);
