import { useEffect } from 'react'
import { AppState } from 'react-native'

import { RecoilRoot } from 'recoil'

import { ErrorBoundary } from './src/components/error/ErrorBoundary'
import { RootNavigator } from './src/navigation/RootNavigator'
import { onAppStateChange } from './src/utils/onAppStateChange'

import './src/@types/App.d.ts'

function App(): JSX.Element {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])

  return (
    <ErrorBoundary>
      <RecoilRoot>
        <RootNavigator />
      </RecoilRoot>
    </ErrorBoundary>
  )
}

export default App
