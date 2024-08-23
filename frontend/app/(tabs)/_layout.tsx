import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen name="one" options={{ title: "One", headerShown: false }} />
      <Tabs.Screen name="two" options={{ title: "Two", headerShown: false }} />
      <Tabs.Screen
        name="three"
        options={{ title: "Three", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
