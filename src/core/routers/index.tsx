import { Button, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import BasePage from "../../features/base/pages/BasePage/BasePage";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomePage from "../../features/home/pages/HomePage/HomePage";
import { Entypo } from "@expo/vector-icons";
import { TabBar, TabText } from "../../styles/themes/theme";

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
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
        },
      }}
      // tabBar={(props) => {
      //   return (
      //     <TabBar>
      //       {props.state.routes.map((route, index) => {
      //         const isFocused = props.state.index === index;
      //         const onPress = () => {
      //           const event = props.navigation.emit({
      //             type: "tabPress",
      //             target: route.key,
      //             canPreventDefault: true,
      //           });

      //           if (!isFocused && !event.defaultPrevented) {
      //             props.navigation.navigate(route.name);
      //           }
      //         };

      //         return (
      //           <TouchableOpacity key={route.key} onPress={onPress}>
      //             <TabText
      //               style={{ fontWeight: isFocused ? "bold" : "normal" }}
      //             >
      //               {route.name}
      //             </TabText>
      //           </TouchableOpacity>
      //         );
      //       })}
      //     </TabBar>
      //   );
      // }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BasePage"
        component={BasePage}
        options={{
          headerTitle: (props) => <LogoTitle />,
          headerRight: (props) => (
            <Button
              onPress={() => navigation.navigate("HomePage")}
              title="Info"
              color="#000"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
