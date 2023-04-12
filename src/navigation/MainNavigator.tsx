import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ErrorBoundary } from '../components/error/ErrorBoundary'
import { DEFAULT_STACK_OPTIONS } from '../utils/constants'

import { HomeStack } from './stacks/HomeStack'
import { MainStackParamList } from './types/NavigationTypes'

const MainStack = createNativeStackNavigator<MainStackParamList>()

export const MainNavigator: React.FC = () => {
	return (
		<ErrorBoundary>
			<MainStack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
				<MainStack.Screen
					name="HomeStack"
					component={HomeStack}
					options={DEFAULT_STACK_OPTIONS}
				/>
			</MainStack.Navigator>
		</ErrorBoundary>
	)
}
