import React from "react";
import { View } from "react-native";
import tw from "tailwind-rn";

import Button from "../components/Button";
import Link from "../components/Link";
import TextInput from "../components/TextInput";

const Screen = () => {
  return (
    <View style={tw("w-full h-full bg-white py-4 px-2")}>
      <TextInput placeholder="Nome" />
      <TextInput placeholder="Data de Nascimento" />
      <TextInput placeholder="Estado Civil" />
      <Button
        tooStyle="bg-yellow-600 mb-4"
        txtStyle="text-white"
        text="Salvar"
        onPress={() => {}}
      />
      <Link txtStyle="text-yellow-600 mb-4" text="Sair" onPress={() => {}} />
    </View>
  );
};

export default Screen;
