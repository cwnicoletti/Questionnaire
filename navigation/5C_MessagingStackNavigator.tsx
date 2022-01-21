import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../screens/main/3_MessagingTab/ChatScreen/ChatScreen";
import ViewProfile from "../screens/main/3_MessagingTab/ChatScreen/ViewProfile";
import MessagingMainScreen from "../screens/main/3_MessagingTab/MessagingMainScreen";
import Messages from "../components/headers/Messages";
import BackMessages from "../components/headers/BackMessages";
import BackMessagesTitle from "../components/headers/BackMessagesTitle";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function QuestionnaireStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessagingMainScreen"
        component={MessagingMainScreen}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          header: ({ navigation }) => <Messages navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          header: ({ navigation }) => <BackMessages navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="ViewProfile"
        component={ViewProfile}
        options={{
          header: ({ navigation }) => (
            <BackMessagesTitle navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default QuestionnaireStackNavigator;
