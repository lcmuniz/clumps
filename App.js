import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/Navigation";

import Splash from "./src/screens/Splash";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return loading ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <View style={styles.container}>
        <StackNavigation />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
});
