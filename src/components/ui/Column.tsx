import type { ViewProps } from 'react-native/types'

import { clsx } from 'clsx'

import { View } from '~components/ui/View'

interface ColumnInterface extends ViewProps {
  center?: boolean
  full?: boolean
}

export const Column: React.FC<ColumnInterface> = ({ children, ...props }) => {
  const { center = false, full = false, ...viewProps } = props
  const stylesCenter = center ? 'justify-center items-center' : ''
  const stylesWidth = full ? 'w-full' : ''

  return (
    <View {...viewProps} className={clsx('flex flex-col', stylesCenter, stylesWidth)}>
      {children}
    </View>
  )
}
