import { useEffect, useState } from 'react'
import { ThemeContext } from './themeContext'

export function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem("darkTheme");
        return saved ? JSON.parse(saved) : false;
      });
    
      useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(dark));
      }, [dark]);
    
      const toggleTheme = () => {
        setDark(prev => !prev);
      };

    return (
        <ThemeContext.Provider
            value={{
                darkTheme: dark,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}