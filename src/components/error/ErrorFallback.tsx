import { Text, TouchableOpacity } from 'react-native'
import type { FallbackComponentProps } from 'react-native-error-boundary'

import { View } from '~components/ui/View'

export const ErrorFallback: React.FC<FallbackComponentProps> = props => {
  const { error, resetError } = props

  return (
    <View>
      <Text>There was an error:</Text>
      <Text>{`${error.toString()}`}</Text>
      <TouchableOpacity className="flex items-center justify-center p-4 bg-buttonPrimary" onPress={resetError}>
        <Text className="text-white">Try Again</Text>
      </TouchableOpacity>
    </View>
  )
}
