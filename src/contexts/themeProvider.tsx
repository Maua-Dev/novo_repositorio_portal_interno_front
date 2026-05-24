import { useState } from 'react'
import { ThemeContext } from './themeContext'

export function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [dark, setDark] = useState(false)

    const toggleTheme = () => {
        setDark((prev) => {
            localStorage.setItem('darkTheme', JSON.stringify(!prev))
            return !prev
        })
    }

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