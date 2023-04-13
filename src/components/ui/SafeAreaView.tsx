import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context'
import { SafeAreaView as SafeView } from 'react-native-safe-area-context'

interface SafeAreaViewInterface extends NativeSafeAreaViewProps {
  edges?: ('bottom' | 'left' | 'right' | 'top')[]
}

export const SafeAreaView: React.FC<SafeAreaViewInterface> = props => {
  const { children, edges = ['bottom', 'top'], ...safeAreaViewProps } = props

  return (
    <SafeView {...safeAreaViewProps} edges={edges}>
      {children}
    </SafeView>
  )
}
