import { createContext, PropsWithChildren, useContext, useState } from "react"
import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import '@mui/material/styles'
import { PaletteColor, PaletteColorOptions } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline'

declare module '@mui/material/styles' {
    interface Palette {
        tertiary?: PaletteColor;
        quaternary?: PaletteColor;
    }
    interface PaletteOptions {
        tertiary?: PaletteColorOptions;
        quaternary?: PaletteColorOptions;
    }
}

const Theme = createTheme({
    palette: {
        background: {
            default: '#7eb19f',
        },
        primary: {
            main: '#0c8282',
        },
        secondary: {
            main: '#ef9037',
        },
        tertiary: {
            main: '#edddbd',
        },

        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#54a4af',
        },
        success: {
            main: '#4caf50',
        },
    },
});

const ThemeContext = createContext({
    currentTheme: Theme,
    toggleTheme: (name: string) => { console.log("Default toggleTheme function" + name)},
});

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider = (props: PropsWithChildren) => {
    const [currentTheme, setCurrentTheme] = useState(Theme)

    const toggleTheme = (name: string) => {
        console.log(name)
        setCurrentTheme(currentTheme)
    }

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
