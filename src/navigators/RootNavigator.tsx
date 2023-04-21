import { forwardRef } from 'react'
import { StatusBar } from 'react-native'
import { useFlipper } from '@react-navigation/devtools'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'

import { ErrorBoundary } from '~components/error/ErrorBoundary'
import { Column } from '~components/ui/Column'
import { SafeAreaView } from '~components/ui/SafeAreaView'
import { RootStack } from '~stacks/RootStack'

export const RootNavigator = forwardRef<Partial<React.ComponentProps<typeof NavigationContainer>>>((props, ref) => {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <ErrorBoundary>
      <NavigationContainer {...props} {...ref} ref={navigationRef}>
        <SafeAreaView className="flex-1 bg-black">
          <Column className="flex-1 bg-backgroundPrimary">
            <StatusBar animated={true} barStyle="light-content" backgroundColor="#000" />
            <RootStack />
          </Column>
        </SafeAreaView>
      </NavigationContainer>
    </ErrorBoundary>
  )
})

RootNavigator.displayName = 'RootNavigator'
