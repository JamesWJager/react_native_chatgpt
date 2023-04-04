import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeStack} from './stacks/HomeStack';
import {MainStackParamList} from './types/NavigationTypes';

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator: React.FC = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen name="HomeStack" component={HomeStack} />
		</MainStack.Navigator>
	);
};
