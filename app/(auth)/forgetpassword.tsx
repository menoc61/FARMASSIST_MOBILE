import { View,ScrollView, SafeAreaView, Image} from 'react-native'
import { Images } from '~/lib/constants'
import { Text } from "~/components/ui/text";
import { H1, Muted } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { router } from "expo-router";
const forgetpassword = () => {
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
                how you forgotten you email? no problem fill the form below to get a new password in your mailbox
              </Muted>
            </View>
            <Input placeholder="name@example.com" inputMode="email" keyboardType="email-address" />

            <Button variant={"themed"} onPress={()=> console.info("get password")}>
              <Text>Get new password</Text>
            </Button>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default forgetpassword;