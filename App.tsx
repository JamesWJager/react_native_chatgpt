import { useEffect } from 'react'
import { AppState } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { RecoilRoot } from 'recoil'

import { ErrorBoundary } from './src/components/error/ErrorBoundary'
import { RootNavigator } from './src/navigators/RootNavigator'
import { onAppStateChange } from './src/utils/onAppStateChange'

import FlipperAsyncStorage from '~flipperPlugins/FlipperAsyncStorage'

function App(): JSX.Element {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])

  return (
    <ErrorBoundary>
      <RecoilRoot>
        <FlipperAsyncStorage />
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </RecoilRoot>
    </ErrorBoundary>
  )
}

export default App
