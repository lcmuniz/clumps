import React from "react";
import { TextInput } from "react-native";
import tw from "tailwind-rn";

const Component = (props) => {
  const { placeholder } = props;
  return (
    <TextInput
      placeholder={placeholder}
      style={tw("border border-gray-400 rounded-xl px-4 py-2 mb-2")}
    />
  );
};

export default Component;
