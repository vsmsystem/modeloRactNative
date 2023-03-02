import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../../../styles/themes/theme";

interface ThemeContextData {
  theme: "light" | "dark";
  toggleTheme(): void;
}

interface MyComponentProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeContextData = {
    theme,
    toggleTheme,
  };

  const activeTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={themeContextData}>
      <StyledThemeProvider theme={activeTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
