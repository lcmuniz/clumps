import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import tw from "tailwind-rn";

import historico from "../../assets/historico.png";
import avatarJogador from "../../assets/avatar-jogador.png";

const Screen = () => {
  return (
    <View style={tw("h-full bg-white items-center p-8")}>
      <Text style={tw("font-bold mb-4")}>Histórico de Desafios</Text>
      <Image
        source={historico}
        resizeMode="cover"
        style={tw("bg-red-100 w-56 h-36 mb-4")}
      />
      <ScrollView style={tw("w-full")}>
        <View style={tw("w-full py-2")}>
          <View
            style={tw(
              "flex-row items-center border border-gray-400 rounded-xl p-4"
            )}
          >
            <View
              style={tw(
                "items-center border-2 border-blue-400 rounded-full w-16 h-16 justify-center"
              )}
            >
              <Image
                source={avatarJogador}
                resizeMode="center"
                style={tw("w-12 h-12")}
              />
            </View>
            <View style={tw("justify-center ml-2")}>
              <Text style={tw("font-bold text-lg text-blue-900")}>
                Jogar futebol
              </Text>
              <Text style={tw("text-gray-800")}>24 de novembro de 2021</Text>
              <Text style={tw("text-gray-800")}>450 pontos</Text>
            </View>
          </View>
        </View>

        <View style={tw("w-full py-2")}>
          <View
            style={tw(
              "flex-row items-center border border-gray-400 rounded-xl p-4"
            )}
          >
            <View
              style={tw(
                "items-center border-2 border-blue-400 rounded-full w-16 h-16 justify-center"
              )}
            >
              <Image
                source={avatarJogador}
                resizeMode="center"
                style={tw("w-12 h-12")}
              />
            </View>
            <View style={tw("justify-center ml-2")}>
              <Text style={tw("font-bold text-lg text-blue-900")}>
                Jogar futebol
              </Text>
              <Text style={tw("text-gray-800")}>24 de novembro de 2021</Text>
              <Text style={tw("text-gray-800")}>450 pontos</Text>
            </View>
          </View>
        </View>
        <View style={tw("w-full py-2")}>
          <View
            style={tw(
              "flex-row items-center border border-gray-400 rounded-xl p-4"
            )}
          >
            <View
              style={tw(
                "items-center border-2 border-blue-400 rounded-full w-16 h-16 justify-center"
              )}
            >
              <Image
                source={avatarJogador}
                resizeMode="center"
                style={tw("w-12 h-12")}
              />
            </View>
            <View style={tw("justify-center ml-2")}>
              <Text style={tw("font-bold text-lg text-blue-900")}>
                Jogar futebol
              </Text>
              <Text style={tw("text-gray-800")}>24 de novembro de 2021</Text>
              <Text style={tw("text-gray-800")}>450 pontos</Text>
            </View>
          </View>
        </View>
        <View style={tw("w-full py-2")}>
          <View
            style={tw(
              "flex-row items-center border border-gray-400 rounded-xl p-4"
            )}
          >
            <View
              style={tw(
                "items-center border-2 border-blue-400 rounded-full w-16 h-16 justify-center"
              )}
            >
              <Image
                source={avatarJogador}
                resizeMode="center"
                style={tw("w-12 h-12")}
              />
            </View>
            <View style={tw("justify-center ml-2")}>
              <Text style={tw("font-bold text-lg text-blue-900")}>
                Jogar futebol
              </Text>
              <Text style={tw("text-gray-800")}>24 de novembro de 2021</Text>
              <Text style={tw("text-gray-800")}>450 pontos</Text>
            </View>
          </View>
        </View>
        <View style={tw("w-full py-2")}>
          <View
            style={tw(
              "flex-row items-center border border-gray-400 rounded-xl p-4"
            )}
          >
            <View
              style={tw(
                "items-center border-2 border-blue-400 rounded-full w-16 h-16 justify-center"
              )}
            >
              <Image
                source={avatarJogador}
                resizeMode="center"
                style={tw("w-12 h-12")}
              />
            </View>
            <View style={tw("justify-center ml-2")}>
              <Text style={tw("font-bold text-lg text-blue-900")}>
                Jogar futebol
              </Text>
              <Text style={tw("text-gray-800")}>24 de novembro de 2021</Text>
              <Text style={tw("text-gray-800")}>450 pontos</Text>
            </View>
          </View>
        </View>
        <View style={tw("h-16")}></View>
      </ScrollView>
    </View>
  );
};

export default Screen;
