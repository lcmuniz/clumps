import React from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import tw from "tailwind-rn";

import logo from "../../assets/logo.png";

const Screen = () => {
  return (
    <View style={tw("h-full bg-white justify-center items-center")}>
      <Image source={logo} resizeMode="center" style={tw("w-32 h-32")} />
      <Text style={tw("font-bold text-4xl mb-4")}>Clumps</Text>
      <ActivityIndicator size="large" color="orange" />
    </View>
  );
};

export default Screen;
