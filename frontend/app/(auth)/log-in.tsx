import {
  View,
  Text,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="mx-5 flex-1 justify-center items-center">
      <Text className="text-4xl self-start">Sign In</Text>
      <Text className="text-xl self-start">Transform your fitness journey</Text>
      <TextInput
        className="w-full border-black mt-9 p-5 rounded-full bg-[#D9D9D9] text-white text-xl"
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
      />
      <TextInput
        className="w-full mt-3 p-5 rounded-full bg-[#D9D9D9] text-red-400 text-xl"
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
      />

      <View className="self-start">
        <Button title="Forgot Password?" />
      </View>
      <TouchableOpacity className="mt-6 w-full p-4 flex justify-center items-center  bg-[#6C4BFF] rounded-full">
        <Text className="text-xl text-white">Sign up</Text>
      </TouchableOpacity>
      <Text className="self-start mt-1 text-lg border">
        New to Gym?
        <View className="h-10">
          <Button title="Create Account" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;
