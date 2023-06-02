import { createContext, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper, useMediaQuery } from "@mui/material";

import Nav from "./Nav"

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Main() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = useState<"light" | "dark">(() => {
        if (localStorage.theme === "dark" || localStorage.theme === "light") {
            return localStorage.theme;
        }
        const theme = prefersDarkMode ? "dark" : "light";
        localStorage.setItem("theme", theme);
        return theme;
    });
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newTheme = prevMode === "light" ? "dark" : "light";
                    localStorage.setItem("theme", newTheme);
                    return newTheme;
                });
            },
        }),
        []
    );
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );
    return (
        <ColorModeContext.Provider value={colorMode}>
            <Global
                styles={css`
                    *,
                    ::before,
                    ::after {
                        box-sizing: border-box;
                        padding: 0;
                        margin: 0;
                        vertical-align: baseline;
                        list-style: none;
                        border: 0;
                        text-decoration: none;
                        font-family: monospace;
                        font-size: 20px;
                    }
                    ::-webkit-scrollbar {
                        width: 8px;
                    }

                    ::-webkit-scrollbar-track {
                        background-color: ${theme.palette.background.default};
                        border-radius: 8px;
                    }

                    ::-webkit-scrollbar-thumb {
                        background-color: #785A28;
                        border-radius: 8px;
                    }
                    ::-moz-selection {
                        /* Code for Firefox */
                        color: #000;
                        background: #808080;
                    }

                    ::selection {
                        color: #000;
                        background: #808080;
                    }
                    body {
                        background-color: ${mode === "dark"
                            ? theme.palette.primary.dark
                            : theme.palette.primary.light};
                    }
                `}
            />
            <ThemeProvider theme={theme}>
                <Paper
                    elevation={0}
                    sx={{
                        margin: 0,
                        height: "100vh",
                        width: "100vw",
                        borderRadius: 0,
                        transition: ".4s ease-out",
                    }}
                >
                    <Nav />
                    <Outlet />
                </Paper>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};