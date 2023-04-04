import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DEFAULT_STACK_OPTIONS} from '../../utils/constants';
import {MainNavigator} from '../MainNavigator';
import {RootStackParamList} from '../types/NavigationTypes';

const RouteStack = createNativeStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
	return (
		<RouteStack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
			{/* <RouteStack.Screen
				name="Loading"
				component={LoadingScreen}
				options={DEFAULT_STACK_OPTIONS}
			/> */}
			<RouteStack.Screen
				name="MainNavigator"
				component={MainNavigator}
				options={DEFAULT_STACK_OPTIONS}
			/>
		</RouteStack.Navigator>
	);
};
