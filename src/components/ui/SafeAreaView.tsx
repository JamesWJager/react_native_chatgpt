import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context'
import { SafeAreaView as SafeView } from 'react-native-safe-area-context'

export const SafeAreaView: React.FC<NativeSafeAreaViewProps> = props => {
  const { children, ...safeAreaViewProps } = props

  return <SafeView {...safeAreaViewProps}>{children}</SafeView>
}
