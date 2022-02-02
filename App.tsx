import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import AppNavigator from "./navigation/1_AppNavigator";
import signupReducer from "./store/reducers/signup";
import progressbarReducer from "./store/reducers/progressbar";
import toptabbarReducer from "./store/reducers/toptabbar";
import * as Notifications from "expo-notifications";
import { useFonts } from "expo-font";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const rootReducer = combineReducers({
  signup: signupReducer,
  progressbar: progressbarReducer,
  toptabbar: toptabbarReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | any;

const App = () => {
  useFonts({
    Nautilus: require("./assets/fonts/Nautilus.otf"),
  });

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
