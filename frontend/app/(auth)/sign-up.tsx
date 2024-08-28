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

const SignUp = () => {
  return (
    <SafeAreaView className="border-8 flex-1 justify-center">
      <Text className="ml-10 text-4xl text-left">Sign Up</Text>
      <Text className="ml-10 text-xl">Transform your fitness journey</Text>
      <TextInput
        className=" border-black mt-9 p-5 rounded-full bg-[#D9D9D9] text-white text-xl"
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
      />
      <TextInput
        className="w-4/5 mt-3 p-5 rounded-full bg-[#D9D9D9] text-red-400 text-xl"
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
      />
      <Button title="Forgot Password?" />
      <TouchableOpacity className="p-4 flex justify-center items-center  bg-[#6C4BFF] rounded-full">
        <Text className="text-xl text-white">Sign up</Text>
      </TouchableOpacity>
      <Text className="mt-2 text-lg border">
        New to Gym?
        <View className="h-10">
          <Button title="Create Account" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;
