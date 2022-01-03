import React, { useCallback, useEffect, useState, useRef } from "react";
import { Image, StyleSheet, Animated } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";

const StartupScreen = (props) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const prepare = async () => {
    try {
      // Keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setAppIsReady(true);
    }
  };

  const tryLogin = async () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      props.navigation.navigate("StartAuth");
    });
  };

  useEffect(() => {
    prepare();
    tryLogin();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const cacheResourcesAsync = async () => {
    const images = [require("../assets/naire_icon/transparent_colored.png")];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  if (!appIsReady) {
    return (
      <AppLoading
        startAsync={async () => {
          await cacheResourcesAsync();
        }}
        onFinish={async () => {
          await onLayoutRootView();
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <Animated.View style={{ ...styles.screen, opacity: fadeAnim }}>
      <Image
        source={require("../assets/naire_icon/transparent_colored.png")}
        style={{ height: "100%", width: "100%" }}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
});

export default StartupScreen;
