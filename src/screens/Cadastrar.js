import React from "react";
import { View, Image, Text } from "react-native";
import tw from "tailwind-rn";

import cadastrar from "../../assets/cadastrar.png";

import Button from "../components/Button";
import Link from "../components/Link";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";

const Screen = () => {
  return (
    <View style={tw("h-full bg-white justify-center items-center")}>
      <Image
        source={cadastrar}
        resizeMode="cover"
        style={tw("bg-red-100 w-44 h-36 mb-2")}
      />
      <Text style={tw("font-medium text-2xl mb-2")}>Cadastrar</Text>
      <View style={tw("w-full py-4 px-8")}>
        <TextInput placeholder="Nome" />
        <TextInput placeholder="Email" />
        <PasswordInput placeholder="Senha" />
        <PasswordInput placeholder="Confirmar senha" />
        <Button
          tooStyle="bg-yellow-600"
          txtStyle="text-white"
          text="Salvar"
          onPress={() => {}}
        />
        <Link txtStyle="text-yellow-600" text="Login" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Screen;
