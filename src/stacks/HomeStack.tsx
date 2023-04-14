import type React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { HomeStackParamList } from '~@types/NavigationTypes'

import { ErrorBoundary } from '~components/error/ErrorBoundary'
import { ChatScreen } from '~screens/ChatScreen'
import { HomeScreen } from '~screens/HomeScreen'
import { DEFAULT_STACK_OPTIONS } from '~utils/constants'

const Stack = createNativeStackNavigator<HomeStackParamList>()

export const HomeStack: React.FC = () => {
  return (
    <ErrorBoundary>
      <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={DEFAULT_STACK_OPTIONS} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={DEFAULT_STACK_OPTIONS} />
      </Stack.Navigator>
    </ErrorBoundary>
  )
}
