import type { TextProps } from 'react-native'
import { Text as RNText } from 'react-native'

import clsx from 'clsx'

interface TextInterface extends TextProps {
  text: string
  textStyles?: string
}

export const Text: React.FC<TextInterface> = props => {
  const { text, textStyles, ...textProps } = props

  return (
    <RNText {...textProps} className={clsx('text-black', textStyles)}>
      {text}
    </RNText>
  )
}
