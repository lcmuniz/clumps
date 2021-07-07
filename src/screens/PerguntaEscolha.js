import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-rn";

import Button from "../components/Button";

const Screen = () => {
  return (
    <View style={tw("h-full bg-white items-center p-8")}>
      <Text style={tw("font-bold mb-4")}>Pergunta 102</Text>
      <Text style={tw("font-bold mb-4 text-2xl")}>
        Qual a periodicidade de suass atividades físicas?
      </Text>
      <View style={tw("w-full py-4")}>
        <Button
          tooStyle="bg-white border border-gray-400"
          txtStyle="font-normal text-gray-700 text-left"
          text="A. Diária"
          onPress={() => {}}
        />
        <Button
          tooStyle="bg-white border border-gray-400"
          txtStyle="font-normal text-gray-700 text-left"
          text="B. Semanal"
          onPress={() => {}}
        />
        <Button
          tooStyle="bg-yellow-100 border border-yellow-600"
          txtStyle="text-yellow-600 text-left"
          text="C. Mensal"
          onPress={() => {}}
        />
        <Button
          tooStyle="bg-yellow-600"
          txtStyle="text-white"
          text="Responder"
          onPress={() => {}}
        />
        <Button
          tooStyle="bg-yellow-400"
          txtStyle="text-white"
          text="Cancelar"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Screen;
