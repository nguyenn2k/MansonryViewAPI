import { Image } from "react-native";
import React from "react";

const Card = ({ width, aspectratio, URL }) => {
  return (
    <Image
      source={{uri: URL}}
      style={{
        width: width,
        height: width * aspectratio,
        marginBottom: 10,
        borderRadius: 10,
      }}
    />
  );
};

export default Card;

