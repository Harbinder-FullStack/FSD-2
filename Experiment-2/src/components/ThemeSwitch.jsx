import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";
import { useState } from "react";
import Dashboard from "./Dashboard";
/**
ThemeProvider → Applies theme globally
CssBaseline → Normalizes styles
Theme switching updates:
Background
Text
Cards
AppBar
No component-level changes needed

Industry Concept:
Centralized theming for scalability
 */
function ThemeSwitchApp() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button
        onClick={() => setDarkMode(!darkMode)}
        sx={{ position: "fixed", top: 10, right: 10 }}
        variant="contained"
      >
        Toggle Theme
      </Button>
      <Dashboard />
    </ThemeProvider>
  );
}

export default ThemeSwitchApp;
