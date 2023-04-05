import {TextInput} from 'react-native';

import {useSetRecoilState} from 'recoil';

import {chatQueryAtom} from '../atoms/chatQueryAtom';
import {ErrorBoundary} from '../components/error/ErrorBoundary';
import Column from '../components/ui/Column';
import Row from '../components/ui/Row';

export const HomeScreen: React.FC = () => {
	const setChatQuery = useSetRecoilState(chatQueryAtom);

	return (
		<ErrorBoundary>
			<Column className="flex-1 bg-slate-500" center>
				<Row className="px-4">
					<TextInput
						className="text-black min-w-[90vw] bg-white rounded-lg"
						placeholder="Chat Here"
						placeholderTextColor={'#000'}
						onChangeText={setChatQuery}
					/>
				</Row>
			</Column>
		</ErrorBoundary>
	);
};
