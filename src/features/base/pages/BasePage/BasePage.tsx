import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { StyledContainer, StyledText } from "../../../../styles/themes/theme";

export default function BasePage(): React.ReactElement {
  return (
    <StyledContainer>
      <StyledText>Olá, mundo!</StyledText>
      <StatusBar style="auto" />
    </StyledContainer>
  );
}
