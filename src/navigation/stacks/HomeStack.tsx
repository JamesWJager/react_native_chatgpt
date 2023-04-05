import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ErrorBoundary} from '../../components/error/ErrorBoundary';
import {HomeScreen} from '../../screens/HomeScreen';
import {DEFAULT_STACK_OPTIONS} from '../../utils/constants';
import {HomeStackParamList} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack: React.FC = () => {
	return (
		<ErrorBoundary>
			<Stack.Navigator
				screenOptions={DEFAULT_STACK_OPTIONS}
				initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={DEFAULT_STACK_OPTIONS}
				/>
			</Stack.Navigator>
		</ErrorBoundary>
	);
};
