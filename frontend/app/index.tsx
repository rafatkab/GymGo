import { Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href="/sign-up" />;
};

export default index;
