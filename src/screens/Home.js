import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "tailwind-rn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import logo from "../../assets/logo.png";
import home from "../../assets/home.png";
import mostrarDesafio from "../../assets/mostrar-desafio.png";
import botaoMostrarDesafio from "../../assets/botao-mostrar-desafio.png";

const Screen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={tw("h-full bg-white items-center p-8")}>
        <Image source={logo} resizeMode="cover" style={tw("w-16 h-16 mb-2")} />
        <Text style={tw("font-bold mb-4 text-2xl text-center")}>Clumps</Text>
        <Image
          source={home}
          resizeMode="cover"
          style={tw("bg-red-100 w-56 h-36 mb-2")}
        />
        <View style={tw("w-full py-4")}>
          <Text style={tw("font-bold text-blue-900 text-2xl")}>
            Olá Luiz Carlos,
          </Text>
          <Text style={tw("font-bold text-gray-800 text-base mb-4")}>
            Aqui estão as informações sobre como anda sua saúde. Você está indo
            muio bem!
          </Text>
        </View>
        <View style={tw("flex-row w-full justify-between")}>
          <View style={tw("border p-2 border-gray-400 rounded-xl mr-2")}>
            <View style={tw("flex-row justify-between")}>
              <Text style={tw("text-xl font-bold text-gray-800")}>Pontos</Text>
              <MaterialCommunityIcons
                name="chart-timeline-variant"
                size={32}
                style={tw("text-blue-900 ml-2")}
              />
            </View>
            <Text style={[tw("font-bold text-gray-800"), { fontSize: 56 }]}>
              1500
            </Text>
            <ProgressBar
              progress={0.5}
              color="orange"
              style={tw("h-2 rounded-xl bg-yellow-300")}
            />
            <Text style={tw("text-sm text-gray-800")}>Meta semanal: 3000</Text>
          </View>
          <View style={tw("border p-2 border-gray-400 rounded-xl mr-2")}>
            <View style={tw("flex-row justify-between")}>
              <Text style={tw("text-xl font-bold text-gray-800")}>Passos</Text>
              <MaterialCommunityIcons
                name="walk"
                size={32}
                style={tw("text-blue-900 ml-2")}
              />
            </View>
            <Text style={[tw("font-bold text-gray-800"), { fontSize: 56 }]}>
              2500
            </Text>
            <ProgressBar
              progress={0.8}
              color="orange"
              style={tw("h-2 rounded-xl bg-yellow-300")}
            />
            <Text style={tw("text-sm text-gray-800")}>Meta semanal: 3000</Text>
          </View>
        </View>
        <Text style={tw("font-bold text-gray-800 text-base mt-4 mb-4")}>
          Está disposto? Comece uma nova atividade agora mesmo? Aumente sua
          pontuação!
        </Text>
        <View style={tw("flex-row justify-between w-full")}>
          <View>
            <Image
              source={mostrarDesafio}
              resizeMode="contain"
              style={tw("w-40 h-40 mb-2")}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("NovoDesafio");
              }}
            >
              <Image
                source={botaoMostrarDesafio}
                resizeMode="contain"
                style={tw("w-40 h-40 mb-4")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Screen;
