import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";

const Component = (props) => {
  const { onPress, text, tooStyle, txtStyle } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw(`rounded-xl p-4 mb-2 ${tooStyle} `)}
    >
      <Text style={tw(`font-bold text-center ${txtStyle}`)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Component;
