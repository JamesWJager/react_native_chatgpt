import { forwardRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { ErrorBoundary } from '../components/error/ErrorBoundary'
import SafeAreaView from '../components/ui/SafeAreaView'
import { RootStack } from '../stacks/RootStack'

export const RootNavigator = forwardRef<Partial<React.ComponentProps<typeof NavigationContainer>>>((props, ref) => {
  return (
    <ErrorBoundary>
      <NavigationContainer {...props} {...ref}>
        <SafeAreaView className="bg-white flex-0" />
        <SafeAreaView className="flex-1 bg-white">
          <RootStack />
        </SafeAreaView>
      </NavigationContainer>
    </ErrorBoundary>
  )
})

RootNavigator.displayName = 'RootNavigator'