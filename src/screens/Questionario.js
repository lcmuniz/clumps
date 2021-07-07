import React from "react";
import { View, Image, Text } from "react-native";
import tw from "tailwind-rn";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import questionario from "../../assets/questionario.png";

import QuestionarioAResponder from "./QuestionarioAResponder";
import QuestionarioRespondidas from "./QuestionarioRespondidas";

const Tab = createMaterialTopTabNavigator();

const Screen = () => {
  return (
    <View style={tw("h-full bg-white items-center p-8")}>
      <Text style={tw("font-bold mb-4")}>Questionário</Text>
      <Image
        source={questionario}
        resizeMode="cover"
        style={tw("bg-red-100 w-52 h-36 mb-4")}
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
          <Tab.Screen name="A Responder" component={QuestionarioAResponder} />
          <Tab.Screen name="Respondidas" component={QuestionarioRespondidas} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Screen;
