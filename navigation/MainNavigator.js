import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartupScreen from "../screens/StartupScreen";


const StartSignup = createStackNavigator({
  SignupOrLogin: SignupOrLoginScreen,
});



const MainNavigator = createStackNavigator({
  StartAuth: {
    screen: StartSignup,
    navigationOptions: {
      headerMode: "none",
      headerShown: false,
      navigationOptions: {
        headerVisible: false,
      },
    },
  },
});

const StartUpNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  MainNavigator: {
    screen: MainNavigator,
    navigationOptions: {
      headerMode: "none",
      headerShown: false,
      navigationOptions: {
        headerVisible: false,
      },
    },
  },
});

export default createAppContainer(StartUpNavigator);
