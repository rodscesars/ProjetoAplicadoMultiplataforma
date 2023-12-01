import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AntDesign } from "@expo/vector-icons";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SelectRouteScreen from "./src/screens/SelectRouteScreen";
import MapRouteScreen from "./src/screens/MapRouteScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import CreateCarScreen from "./src/screens/CreateCarScreen";
import { setNavigator } from "./src/navigationRef";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as CarProvider } from "./src/context/CarContext";

const trackFlow = createStackNavigator({
  SelectRoute: SelectRouteScreen,
  MapRoute: MapRouteScreen,
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackFlow,
    CreateCar: CreateCarScreen,
    Account: AccountScreen,
  }),
});

trackFlow.navigationOptions = {
  title: "Start Route",
  tabBarIcon: <AntDesign name="car" size={22} color="black" />,
};

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <CarProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </CarProvider>
  );
};
