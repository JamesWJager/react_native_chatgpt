import type React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { RootStackParamList } from '~@types/NavigationTypes'

import { ErrorBoundary } from '~components/error/ErrorBoundary'
import { MainNavigator } from '~navigators/MainNavigator'
import { DEFAULT_STACK_OPTIONS } from '~utils/constants'

const RouteStack = createNativeStackNavigator<RootStackParamList>()

export const RootStack: React.FC = () => {
  return (
    <ErrorBoundary>
      <RouteStack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
        {/* <RouteStack.Screen
				name="Loading"
				component={LoadingScreen}
				options={DEFAULT_STACK_OPTIONS}
			/> */}
        <RouteStack.Screen name="MainNavigator" component={MainNavigator} options={DEFAULT_STACK_OPTIONS} />
      </RouteStack.Navigator>
    </ErrorBoundary>
  )
}
