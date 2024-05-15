import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Redirect, router } from "expo-router";
import { H1, Muted, Small } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { Images } from "~/lib/constants";
import { Eye, EyeOff } from "lucide-react-native";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import PhoneInput from "react-native-international-phone-number";

const SignUp = () => {
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>("CM");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePhoneNumberChange = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber);
  };

  const handleSelectedCountryChange = (country: string) => {
    setSelectedCountry(country);
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
                Create an <H1 className="color-green-500">account</H1>
              </H1>
              <Muted className="text-base text-center">
                Enter your email below to create your account
              </Muted>
            </View>
            <Input placeholder="John Doe " maxLength={50} />
            <Input
              placeholder="name@example.com"
              inputMode="email"
              keyboardType="email-address"
            />
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
            <PhoneInput
              value={phoneNumber}
              defaultCountry="CM"
              onChangePhoneNumber={handlePhoneNumberChange}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountryChange}
            />
            <Select>
              <SelectTrigger>
                <SelectValue
                  className="text-foreground text-sm native:text-lg"
                  placeholder="Select a role"
                />
              </SelectTrigger>
              <SelectContent
                className="w-full"
                insets={{ top: 0, bottom: 0, left: 0, right: 0 }}
                sideOffset={4}
              >
                <SelectGroup>
                  <SelectLabel>Roles</SelectLabel>
                  <SelectItem label="individual" value="individual">
                    Individual
                  </SelectItem>
                  <SelectItem label="enterprise" value="enterprise">
                    Enterprise
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <View className="flex-row gap-3 items-center">
              <Checkbox
                aria-labelledby="terms"
                checked={checked}
                onCheckedChange={setChecked}
              />
              <Label
                nativeID="terms"
                onPress={() => setChecked((prev) => !prev)}
              >
                Accept terms and conditions
              </Label>
            </View>
            <Button variant={"themed"} onPress={() => router.push("/(tabs)")}>
              <Text>Submit</Text>
            </Button>
            <Button variant={"secondary"} onPress={() => router.push("/login")}>
              <Text>Login</Text>
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

export default SignUp;
