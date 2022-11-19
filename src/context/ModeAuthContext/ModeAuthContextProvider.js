import React, { createContext, useState } from 'react';

export const ModeAuthContext = createContext();
const ModeAuthContextProvider = ({children}) => {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor = "black"; 
        } else {
          setMode("light");
          document.body.style.backgroundColor = "white";
        }
    };

    const modeAuthInfo = {
        mode,
        toggleMode,
    }
    return (
        <ModeAuthContext.Provider value={modeAuthInfo}>
            {children}
        </ModeAuthContext.Provider>
    );
};

export default ModeAuthContextProvider;