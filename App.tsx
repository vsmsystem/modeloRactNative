import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import AppRoutes from "./src/core/routers";
import { lightTheme, darkTheme } from "./src/styles/themes/theme";

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar barStyle="light-content" backgroundColor="black" translucent />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
