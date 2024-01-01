import React, { useState, useEffect, useRef, useMemo, createContext} from 'react';

const NavBarContext = createContext();

export function NavBarProvider({ children }) {

  const [isFixed, setIsFixed] = useState(false);
  const targetRef = useRef(null);

    useEffect(() => {
    const handleScroll = () => {
      const targetPosition = 1038.65625;
      const scrollPosition = window.scrollY;

      setIsFixed((prevIsFixed) => {
        // to avoid updating state if isFixed doesn't change
        if ((scrollPosition >= targetPosition && !prevIsFixed) || (scrollPosition < targetPosition && prevIsFixed)) {
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


   // Use useMemo to memoize the value of isFixed
  const memoizedIsFixed = useMemo(() => isFixed, [isFixed]);

  return (
    <NavBarContext.Provider value={{memoizedIsFixed, setIsFixed, targetRef}}>
      {children}
    </NavBarContext.Provider>
  )
}

export default NavBarContext;
