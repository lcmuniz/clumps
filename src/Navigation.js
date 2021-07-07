import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Perfil from "./screens/Perfil";
import Historico from "./screens/Historico";
import Questionario from "./screens/Questionario";

import NovoDesafio from "./screens/NovoDesafio";
import Login from "./screens/Login";
import Cadastrar from "./screens/Cadastrar";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Cadastrar" component={Cadastrar} />
    <Stack.Screen name="Tab" component={TabNavigation} />
    <Stack.Screen name="NovoDesafio" component={NovoDesafio} />
  </Stack.Navigator>
);

const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 65,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: "white",
        position: "absolute",
        elevation: 10,
      },
      tabStyle: {
        padding: 10,
      },
      labelStyle: {
        fontWeight: "bold",
      },
      activeTintColor: "orange",
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Início",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Perfil"
      component={Perfil}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Historico"
      component={Historico}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="history" color={color} size={size} />
        ),
        tabBarLabel: "Histórico",
      }}
    />
    <Tab.Screen
      name="Questionario"
      component={Questionario}
      options={{
        tabBarLabel: "Questionário",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="playlist-edit"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
