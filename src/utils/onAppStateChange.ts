import type { AppStateStatus } from 'react-native'
import { Platform } from 'react-native'

import { focusManager } from '@tanstack/react-query'

export function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}
