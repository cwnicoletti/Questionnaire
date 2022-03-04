import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationsScreen from '../screens/main/3_MessagingTab/Notifications/NotificationsScreen';
import ChatScreen from '../screens/main/3_MessagingTab/Chat/ChatScreen';
import ViewProfile from '../screens/main/3_MessagingTab/Chat/ViewProfile';
import MessagingMainScreen from '../screens/main/3_MessagingTab/MessagingMainScreen';
import Messages from '../components/headers/Messages';
import BackMessages from '../components/headers/BackMessages';
import BackMessagesTitle from '../components/headers/BackMessagesTitle';
import BackNotifications from '../components/headers/BackNotifications';

const Stack = createStackNavigator();

const forFade = ({current}: {current: {progress: number | any}}) => ({
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
          header: ({navigation}) => <Messages navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          header: ({navigation, route}) => (
            <BackNotifications navigation={navigation} route={route} />
          ),
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          header: ({navigation, route}) => (
            <BackMessages navigation={navigation} route={route} />
          ),
        }}
      />
      <Stack.Screen
        name="ViewProfile"
        component={ViewProfile}
        options={{
          header: ({navigation}) => (
            <BackMessagesTitle navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default QuestionnaireStackNavigator;
