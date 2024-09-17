import { Text, View, SafeAreaView } from "react-native";
import React from "react";
import Lifting from "@/pages/Lifting";

const LiftingPage = () => {
  return (
    <SafeAreaView className="items-center justify-center">
      <View className="items-center w-5/6 bg-slate-900 rounded-xl pb-4">
        <View>
          <Text className="text-white text-3xl pt-4 pb-2">Push</Text>
        </View>
        <View className="items-center justify-center w-full rounded ">
          <Text className="text-white text-lg">Lateral Raises 3x8</Text>
          <Text className="text-white text-lg">Tricep Pushdowns 3x10</Text>
          <Text className="text-white text-lg">Shoulder Press 3x10</Text>
        </View>
        <View>
          <Text className="text-white text-3xl pt-4 pb-2">Pull</Text>
        </View>
        <View className="items-center justify-center w-full">
          <Text className="text-white text-lg">Curls 3x8</Text>
          <Text className="text-white text-lg">Bicep 3x10</Text>
          <Text className="text-white text-lg">Shoulder Press 3x10</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LiftingPage;
