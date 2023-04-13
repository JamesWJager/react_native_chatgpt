import { forwardRef } from 'react'
import type { ScrollViewProps } from 'react-native'
import { ScrollView as RNScrollView } from 'react-native'

export type ScrollViewRefType = RNScrollView

interface ScrollViewInterface extends ScrollViewProps {
  scrollViewStyles?: string
}

export const ScrollView = forwardRef<RNScrollView, ScrollViewInterface>((props, ref) => {
  const { children, scrollViewStyles, ...scrollViewProps } = props

  return (
    <RNScrollView {...scrollViewProps} ref={ref}>
      {children}
    </RNScrollView>
  )
})
