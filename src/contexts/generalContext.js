import React, { createContext, useState, useEffect } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {

    const [autenticado, setAutenticado] = useState(false);
    const [user, setUser] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }

    // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

    return (
        <GeneralContext.Provider value={{
            autenticado, setAutenticado,
            user, setUser,
            isMobile, setIsMobile,
        }}>
            { children}
        </GeneralContext.Provider>
    )
}