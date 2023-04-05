module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'nativewind/babel',
		[
			'module:react-native-dotenv',
			{
				envName: 'APP_ENV',
				moduleName: '@env',
				path: '.env',
				blocklist: null,
				allowlist: ['CHATGPT_API', 'OPENAI_API_KEY'],
				safe: false,
				allowUndefined: false,
				verbose: false,
			},
		],
	],
};
