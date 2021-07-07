import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const respondidas = [
  {
    numero: 1,
    texto: "Ola pessoal",
  },
  {
    numero: 2,
    texto: "Kasd Ola pessoal",
  },
  {
    numero: 3,
    texto: "Ola pessoal",
  },
  {
    numero: 4,
    texto: "Kasd Ola pessoal",
  },
  {
    numero: 5,
    texto: "Ola pessoal",
  },
  {
    numero: 6,
    texto: "Kasd Ola pessoal",
  },
  {
    numero: 7,
    texto: "Ola pessoal",
  },
  {
    numero: 8,
    texto: "Kasd Ola pessoal",
  },
  {
    numero: 9,
    texto: "Ola pessoal",
  },
  {
    numero: 10,
    texto: "Kasd Ola pessoal",
  },
  {
    numero: 11,
    texto: "Ola pessoal",
  },
  {
    numero: 12,
    texto: "Kasd Ola pessoal",
  },
];

const Separator = () => <View style={[tw("bg-gray-200"), { height: 1 }]} />;

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => {}} style={tw("p-4")}>
      <View style={tw("flex-row bg-white justify-between")}>
        <View>
          <Text style={tw("text-blue-400 text-xs")}>
            Pergunta nº {item.numero}
          </Text>
          <Text style={tw("text-gray-800")}>{item.texto}</Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={32}
          style={tw("text-yellow-900 ml-2")}
        />
      </View>
    </TouchableOpacity>
  );
};

const Screen = () => {
  return (
    <View style={tw("w-full h-96 bg-white py-2")}>
      <View style={tw("border rounded-xl border-gray-200")}>
        <FlatList
          data={respondidas}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item) => item.numero + ""}
        />
      </View>
    </View>
  );
};

export default Screen;
