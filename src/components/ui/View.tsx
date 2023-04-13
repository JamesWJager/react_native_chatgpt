import type { ViewProps } from 'react-native'
import { View as RNView } from 'react-native'

import clsx from 'clsx'

interface ViewInterface extends ViewProps {
  viewStyles?: string
}

export const View: React.FC<ViewInterface> = props => {
  const { children, viewStyles, ...rest } = props

  return (
    <RNView {...rest} className={clsx(viewStyles)}>
      {children}
    </RNView>
  )
}
