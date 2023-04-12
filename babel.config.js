module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: 'react-native-dotenv',
        path: '.env',
        blocklist: null,
        safe: true,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
}
