import React, { useState } from "react";
import { View, Image, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Redirect, router } from "expo-router";
import { Text } from "~/components/ui/text";
import { H1, Muted } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Images } from "~/lib/constants";
import { Eye, EyeOff } from "lucide-react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Separator } from "~/components/ui/separator";
const Login = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex-1 justify-center items-center">
          <View className="p-4 native:pb-24 max-w-md gap-6">
            <View className="gap-1">
              <Image
                source={Images.logo}
                resizeMode="contain"
                className="w-[115px] h-[34px]"
              />
              <H1 className="text-foreground text-center">
                Welcome<H1 className="color-green-500"> back! </H1>
              </H1>
              <Muted className="text-base text-center">
                Fill the form below to connect to your account
              </Muted>
            </View>
            <Input placeholder="name@example.com" inputMode="email" keyboardType="email-address" />
            <View className="flex-row items-center border border-gray-300 rounded p-2">
              <TextInput
                style={{ flex: 1 }}
                placeholder="password"
                secureTextEntry={!isPasswordVisible}
                onChangeText={setPassword}
                value={password}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                {isPasswordVisible ? (
                  <EyeOff size={20} color="gray" />
                ) : (
                  <Eye size={20} color="gray" />
                )}
              </TouchableOpacity>
            </View>
            <Button variant={"themed"} onPress={() => router.push("/(tabs)")}>
              <Text>Submit</Text>
            </Button>
            <Button variant={"link"} onPress={() => router.push("/forgetpassword")}>
              <Text className="underline">forgot password?</Text>
            </Button>
            <Button
              variant={"secondary"}
              onPress={() => router.push("/signup")}
            >
              <Text>Sign Up</Text>
            </Button>
            <View className="flex-row items-center gap-3">
              <View className="flex-1 h-px bg-muted" />
              <Muted>OR CONTINUE WITH</Muted>
              <View className="flex-1 h-px bg-muted" />
            </View>
            <View className="flex flex-row items-center justify-center gap-6 mt-8">
              <TouchableOpacity className="w-10 h-10 rounded-full border border-white  bg-black flex items-center justify-center">
                <AntDesign name="github" size={24} color="white" />
              </TouchableOpacity>
              <Separator orientation="vertical" />
              <TouchableOpacity className="w-10 h-10 rounded-full bg-red-500 border border-white  flex items-center justify-center">
                <FontAwesome5
                  name="yandex-international"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <Separator orientation="vertical" />
              <TouchableOpacity className="w-10 h-10 rounded-full bg-red-600 border border-white flex items-center justify-center">
                <AntDesign name="google" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <Muted className="text-center">
                By creating an account, you agree to our{" "}
                <Muted className="underline">Terms of Service</Muted> and{" "}
                <Muted className="underline">Privacy Policy</Muted>
              </Muted>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
