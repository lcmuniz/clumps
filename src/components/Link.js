import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";

const Component = (props) => {
  const { onPress, text, txtStyle } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={tw(`font-bold text-center ${txtStyle}`)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Component;
