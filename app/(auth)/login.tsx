import { View } from 'react-native'
import React from 'react'
import { Text } from '~/components/ui/text';
import { H1, Muted } from '~/components/ui/typography';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
const Login = () => {
  return (
    <View className='flex-1 justify-center items-center'>
    <View className='p-4 native:pb-24 max-w-md gap-6'>
      <View className='gap-1'>
        <H1 className='text-foreground text-center'>Login to your account</H1>
        <Muted className='text-base text-center'>
          follow the auth method bellow to login
        </Muted>
      </View>
      <Input placeholder='name@example.com' autoCapitalize='fu'/>
    </View>
  </View>
  )
}

export default Login;