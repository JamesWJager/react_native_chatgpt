import {Text} from 'react-native';

import Column from '../components/ui/Column';

export const HomeScreen: React.FC = () => {
	return (
		<Column className="flex-1 bg-white">
			<Text className="text-black">Hello World</Text>
		</Column>
	);
};
