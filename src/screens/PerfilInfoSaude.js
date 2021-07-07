import React from "react";
import { View } from "react-native";
import tw from "tailwind-rn";

import Button from "../components/Button";
import TextInput from "../components/TextInput";

const Screen = () => {
  return (
    <View style={tw("w-full h-full bg-white  py-4 px-2")}>
      <TextInput placeholder="Qual o seu peso?" />
      <TextInput placeholder="Qual a sua altura?" />
      <Button
        tooStyle="bg-yellow-600"
        txtStyle="text-white"
        text="Salvar"
        onPress={() => {}}
      />
    </View>
  );
};

export default Screen;
