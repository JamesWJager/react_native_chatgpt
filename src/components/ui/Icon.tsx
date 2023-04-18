import type { ViewProps } from 'react-native'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import clsx from 'clsx'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { chatGPTCategoryAtom } from '~atoms/chatGPTCategoryAtom'
import { chatGPTOpenAPIKeyAtom } from '~atoms/chatGPTOpenAPIKeyAtom'
import { noUserAPIKeyEnteredModalOpenAtom } from '~atoms/noUserAPIKeyEnteredModalOpenAtom'

interface IconInterface extends ViewProps {
  name: string
  icon: IconDefinition
  color: string
}

export const Icon: React.FC<IconInterface> = props => {
  const { name, icon, color } = props
  const [openAPIKey] = useRecoilState(chatGPTOpenAPIKeyAtom)
  const setNoUserAPIKeyEnteredModalOpen = useSetRecoilState(noUserAPIKeyEnteredModalOpenAtom)
  const setChatGPTCategory = useSetRecoilState(chatGPTCategoryAtom)
  const { navigate } = useNavigation()

  const handleNavigation = (category: string) => {
    if (!openAPIKey) {
      setNoUserAPIKeyEnteredModalOpen(true)
      return
    }
    setChatGPTCategory(category)
    navigate('HomeStack', { screen: 'ChatScreen' })
  }
  return (
    <TouchableHighlight
      className="flex items-center justify-center flex-[25%]"
      style={styles.gap}
      onPress={() => handleNavigation(name)}>
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
