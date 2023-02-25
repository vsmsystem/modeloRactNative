import AppRoutes from "./src/core/routers";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
}
