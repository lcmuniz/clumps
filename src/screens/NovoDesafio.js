import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import tw from "tailwind-rn";

import logo from "../../assets/logo.png";
import jogador from "../../assets/jogador.png";

import Button from "../components/Button";

const Screen = () => {
  return (
    <ScrollView>
      <View style={tw("h-full bg-white items-center p-8")}>
        <Image source={logo} resizeMode="cover" style={tw("w-16 h-16 mb-2")} />
        <Text style={tw("font-bold mb-4 text-2xl text-center")}>
          Você tem um novo desafio!
        </Text>
        <Image
          source={jogador}
          resizeMode="cover"
          style={tw("bg-red-100 w-60 h-36 mb-2")}
        />
        <View style={tw("w-full py-4")}>
          <Text style={tw("font-bold text-blue-400")}>Desafio nº 2</Text>
          <Text style={tw("font-bold text-blue-900 text-2xl")}>
            Jogar futebol
          </Text>
          <Text style={tw("font-bold text-gray-800 text-base mb-4")}>
            Vamos bater uma bola durante 30 minutos. Cada minuto a mais são mais
            pontos que você pode fazer.
          </Text>
          <Button
            tooStyle="bg-yellow-600"
            txtStyle="text-white"
            text="Aceitar"
            onPress={() => {}}
          />
          <Button
            tooStyle="bg-yellow-400"
            txtStyle="text-white"
            text="Agendar"
            onPress={() => {}}
          />
          <Button
            tooStyle="bg-yellow-400"
            txtStyle="text-white"
            text="Quero outro"
            onPress={() => {}}
          />
          <Button
            tooStyle="bg-yellow-400"
            txtStyle="text-white"
            text="Recusar"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={tw("p-8")} />
    </ScrollView>
  );
};

export default Screen;
