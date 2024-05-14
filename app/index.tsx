import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { Images } from "~/lib/constants";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import farmerAnimation from "~/assets/animations/farmer_animation.json";
const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={Images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <LottieView
            source={farmerAnimation}
            autoPlay
            loop
            style={{ maxWidth: 380, width: "100%", height: 298 }}
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-foreground font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-2xl color-green-500">Farmassist</Text>
            </Text>

            <Image
              source={Images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm  mt-7 text-center">
            Welcome to FarmAssist, where innovation meets agriculture. Join us
            as we transform traditional farming into a seamless, data-driven
            experience, empowering you to grow smarter, not harder.
          </Text>
          <View className="w-full flex justify-center items-center mt-5">
            <Button
              className="w-full"
              size={"lg"}
              onPress={() => router.push("/login")}
            >
              <Text>Login</Text>
            </Button>
            <Button
              className="w-full mt-5"
              size={"lg"}
              variant={"secondary"}
              onPress={() => router.push("/signup")}
            >
              <Text>Sign up</Text>
            </Button>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
