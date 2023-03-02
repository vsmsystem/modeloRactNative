import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../../../core/components/Header";
import { Container } from "../../../../core/components/Header/styled";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Header>
        <Text>Header B </Text>
      </Header>
      <Text>Home page aqui_</Text>

      <StatusBar style="auto" />
    </View>
  );
}
HomePage.navigationOptions = {
  title: "HomePage",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
