/// <reference types="nativewind/types" />

import type { MainStackParamList } from './NavigationTypes'

declare global {
  namespace ReactNavigation {
    type RootParamList = MainStackParamList
  }
}
