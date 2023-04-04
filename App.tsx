import {useEffect} from 'react';
import {AppState} from 'react-native';

import {RootNavigator} from './src/navigation/RootNavigator';
import {onAppStateChange} from './src/utils/onAppStateChange';

import './App.d.ts';

function App(): JSX.Element {
	useEffect(() => {
		const subscription = AppState.addEventListener('change', onAppStateChange);

		return () => subscription.remove();
	}, []);

	return <RootNavigator />;
}

export default App;
