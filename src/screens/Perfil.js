import React from "react";
import { View, Image, Text } from "react-native";
import tw from "tailwind-rn";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import infopessoais from "../../assets/infopessoais.png";

import PerfilInfoPessoais from "./PerfilInfoPessoais";
import PerfilInfoSaude from "./PerfilInfoSaude";

const Tab = createMaterialTopTabNavigator();

const Screen = () => {
  return (
    <View style={tw("h-full bg-white items-center p-8")}>
      <Text style={tw("font-bold mb-4")}>Perfil</Text>
      <Image
        source={infopessoais}
        resizeMode="cover"
        style={tw("bg-red-100 w-64 h-36 mb-4")}
      />
      <View style={tw("bg-red-400 w-full h-full")}>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {
              height: 4,
              backgroundColor: "orange",
            },
            labelStyle: {
              textTransform: "none",
              fontWeight: "bold",
            },
            activeTintColor: "orange",
            tabStyle: {
              color: "red",
            },
          }}
        >
          <Tab.Screen
            name="Informações Pessoais"
            component={PerfilInfoPessoais}
          />
          <Tab.Screen name="Informações de Saúde" component={PerfilInfoSaude} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Screen;
