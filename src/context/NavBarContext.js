import React, { useState, useEffect, createContext} from 'react';

const NavBarContext = createContext();

export function NavBarProvider({ children }) {

  const [isFixed, setIsFixed] = useState(false);
  

  useEffect(() => {
    const targetPosition = 950;
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      setIsFixed((prevIsFixed) => {
        if (
          (scrollPosition >= targetPosition && !prevIsFixed) ||
          (scrollPosition < targetPosition && prevIsFixed)
        ) {
          return !prevIsFixed;
        }
        return prevIsFixed; 
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavBarContext.Provider value={{isFixed, setIsFixed}}>
      {children}
    </NavBarContext.Provider>
  )
}

export default NavBarContext;
