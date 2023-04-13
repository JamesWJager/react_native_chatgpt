import type { ViewProps } from 'react-native'
import { View } from 'react-native'

import { clsx } from 'clsx'

interface RowInterface extends ViewProps {
  center?: boolean
  full?: boolean
}

export const Row: React.FC<RowInterface> = ({ children, ...props }) => {
  const { center = false, full = false, ...viewProps } = props
  const stylesCenter = center ? 'justify-center items-center' : ''
  const stylesWidth = full ? 'w-full' : ''

  return (
    <View {...viewProps} className={clsx('flex flex-row', stylesCenter, stylesWidth)}>
      {children}
    </View>
  )
}
