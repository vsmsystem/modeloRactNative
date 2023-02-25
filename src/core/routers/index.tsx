import { Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import BasePage from "../../features/base/pages/BasePage/BasePage";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomePage from "../../features/home/pages/HomePage/HomePage";

type RootTabParamList = {
  BasePage: undefined;
  HomePage: undefined;
};

type BasePageNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "BasePage"
>;
type HomePageNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "HomePage"
>;

function LogoTitle(): React.ReactElement {
  return <Ionicons name="md-checkmark-circle" size={32} color="green" />;
}

export default function AppRoutes(): React.ReactElement {
  const navigation = useNavigation<BasePageNavigationProp>();
  const Tab = createBottomTabNavigator<RootTabParamList>();
  return (
    <Tab.Navigator initialRouteName="BasePage">
      <Tab.Screen
        name="BasePage"
        component={BasePage}
        options={{
          headerTitle: (props) => <LogoTitle />,
          headerRight: (props) => (
            <Button
              onPress={() => navigation.navigate("HomePage")}
              title="Info"
              color="#00cc00"
            />
          ),
        }}
      />

      <Tab.Screen name="HomePage" component={HomePage} />
    </Tab.Navigator>
  );
}
