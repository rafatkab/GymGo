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
    <SafeAreaView className="mx-5 flex-1 justify-center items-center">
      <Text className="text-4xl self-start">Sign Up</Text>
      <Text className="text-xl self-start">Transform your fitness journey</Text>
      <TextInput
        className="w-full border-black mt-9 p-5 rounded-full bg-[#D9D9D9] text-white text-xl"
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
      />
      <TextInput
        className="w-full mt-3 p-5 rounded-full bg-[#D9D9D9] text-white text-xl"
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
      />
      <TextInput
        className="w-full mt-3 p-5 rounded-full bg-[#D9D9D9] text-white text-xl"
        placeholder="Retype Password"
        placeholderTextColor="#FFFFFF"
      />
      <TouchableOpacity className="mt-16 w-full p-4 flex justify-center items-center  bg-[#6C4BFF] rounded-full">
        <Text className="text-xl text-white">Sign up</Text>
      </TouchableOpacity>
      <Text className="self-start mt-1 text-lg border">
        Already have an account?
        <View className="h-10">
          <Button title="Sign In" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;
