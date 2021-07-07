import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn";

import Button from "../components/Button";
import TextInput from "../components/TextInput";

const Screen = () => {
  return (
    <View style={tw("h-full bg-white items-center p-8")}>
      <Text style={tw("font-bold mb-4")}>Pergunta 101</Text>
      <Text style={tw("font-bold mb-4 text-2xl")}>
        Quantos dias você pratica exercícios físicos?
      </Text>
      <View style={tw("w-full py-4")}>
        <TextInput />
        <Button
          tooStyle="bg-yellow-600"
          txtStyle="text-white"
          text="Responder"
          onPress={() => {}}
        />
        <Button
          tooStyle="bg-yellow-400"
          txtStyle="text-white"
          text="Salvar"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Screen;
