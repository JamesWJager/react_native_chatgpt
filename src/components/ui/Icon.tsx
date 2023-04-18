import type { ViewProps } from 'react-native'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import clsx from 'clsx'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { Column } from './Column'
import { Row } from './Row'

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
    <TouchableOpacity className="flex items-center justify-center" onPress={() => handleNavigation(name)}>
      <Column className="h-[30vw] w-[30vw] items-center justify-center rounded-xl bg-backgroundPrimary">
        <Row className={clsx('h-11 w-11 flex items-center justify-center rounded-md', color)}>
          <FontAwesomeIcon icon={icon} color="white" size={25} />
        </Row>
        <Text className="text-white text-center pt-2">{name}</Text>
      </Column>
    </TouchableOpacity>
  )
}
