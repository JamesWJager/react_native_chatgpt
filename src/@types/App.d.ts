/// <reference types="nativewind/types" />

import type { MainStackParamList } from './NavigationTypes'

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends MainStackParamList {}
  }
}
