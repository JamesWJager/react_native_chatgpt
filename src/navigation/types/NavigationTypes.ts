import type {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// Documentation
// https://javascript.plainenglish.io/react-navigation-v6-with-typescript-nested-navigation-part-2-87844f643e37

export type RootStackParamList = {
	Loading: undefined;
	MainNavigator: NavigatorScreenParams<MainStackParamList> | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, T>;

export type MainStackParamList = {
	HomeStack: NavigatorScreenParams<HomeStackParamList> | undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
	CompositeScreenProps<
		NativeStackScreenProps<MainStackParamList, T>,
		RootStackScreenProps<keyof RootStackParamList>
	>;

export type HomeStackParamList = {
	Home: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
	CompositeScreenProps<
		NativeStackScreenProps<HomeStackParamList, T>,
		MainStackScreenProps<keyof MainStackParamList>
	>;
