import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const one = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>one</Text>
      </View>
    </SafeAreaView>
  );
};

export default one;

const styles = StyleSheet.create({});
