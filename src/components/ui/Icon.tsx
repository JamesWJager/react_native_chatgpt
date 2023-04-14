import type { ViewProps } from 'react-native'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import clsx from 'clsx'

interface IconInterface extends ViewProps {
  name: string
  icon: IconDefinition
  color: string
}

export const Icon: React.FC<IconInterface> = props => {
  const { name, icon, color } = props
  const { navigate } = useNavigation()

  const handleNavigation = () => {
    navigate('HomeStack', { screen: 'ChatScreen' })
  }
  return (
    <TouchableHighlight
      className="flex items-center justify-center flex-[25%]"
      style={styles.gap}
      onPress={handleNavigation}>
      <>
        <View className={clsx('h-11 w-11 flex items-center justify-center rounded-xl', color)}>
          <FontAwesomeIcon icon={icon} color="white" size={20} />
        </View>
        <Text className="text-white">{name}</Text>
      </>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
  gap: {
    gap: 5,
  },
})
