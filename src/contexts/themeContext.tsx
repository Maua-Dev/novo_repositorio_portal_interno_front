import { createContext } from 'react'

interface ThemeProps {
    darkTheme: boolean
    toggleTheme: () => void
}

const defaultTheme: ThemeProps = {
    darkTheme: false,
    toggleTheme: () => {}
}

export const ThemeContext = createContext(defaultTheme)