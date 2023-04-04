import {Text} from 'react-native';

import View from '../components/ui/View';

export const LoadingScreen: React.FC = () => {
	return (
		<View className="bg-white">
			<Text className="text-black">Loading...</Text>
		</View>
	);
};
