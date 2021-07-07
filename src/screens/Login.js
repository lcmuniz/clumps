import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-rn";

import login from "../../assets/login.png";

import Button from "../components/Button";
import Link from "../components/Link";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";

const Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw("h-full bg-white justify-center items-center")}>
      <Image
        source={login}
        resizeMode="cover"
        style={tw("bg-red-100 w-36 h-36 mb-2")}
      />
      <Text style={tw("font-medium text-2xl mb-2")}>Login</Text>
      <View style={tw("w-full py-4 px-8")}>
        <TextInput placeholder="Email" />
        <PasswordInput placeholder="Senha" />
        <Button
          tooStyle="bg-yellow-600 mb-4"
          txtStyle="text-white"
          text="Entrar"
          onPress={() => {
            navigation.navigate("Tab");
          }}
        />
        <Link
          txtStyle="text-yellow-600 mb-4"
          text="Esqueceu a senha?"
          onPress={() => {}}
        />
        <Link
          txtStyle="text-yellow-600"
          text="Novo? Cadastre-se."
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Screen;
