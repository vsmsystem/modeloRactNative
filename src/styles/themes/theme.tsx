import { StyleSheet, Text, View } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

// Definição do tema light
export const lightTheme: DefaultTheme = {
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    primary: "#007AFF",
    secondary: "#6C757D",
  },
};

// Definição do tema dark
export const darkTheme: DefaultTheme = {
  colors: {
    background: "#000000",
    text: "#FFFFFF",
    primary: "#007AFF",
    secondary: "#6C757D",
  },
};

// Componente que recebe o tema como propriedade e aplica os estilos correspondentes
export const StyledContainer = styled.View<{ theme: DefaultTheme }>`
  background-color: ${({ theme }: any) => theme.colors.background};
  padding: 16px;
`;

export const StyledText = styled.Text<{ theme: DefaultTheme }>`
  color: ${({ theme }: any) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
`;

export const StyledButton = styled.TouchableOpacity<{ theme: DefaultTheme }>`
  background-color: ${({ theme }: any) => theme.colors.primary};
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
`;

export const StyledButtonText = styled.Text<{ theme: DefaultTheme }>`
  color: ${({ theme }: any) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
`;

export const TabBar = styled.View<{ theme: DefaultTheme }>`
  background-color: ${({ theme }: any) => theme.colors.background};
  height: 60px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const TabText = styled.Text<{ theme: DefaultTheme }>`
  color: ${({ theme }: any) => theme.colors.text};
  font-size: 18px;
`;
