import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
import COLORS from "../constans/colors";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : COLORS.primaryColor}
    />
  );
};

export default CustomHeaderButton;
