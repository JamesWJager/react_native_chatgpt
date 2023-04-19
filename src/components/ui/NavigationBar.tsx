import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { faComment, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { Row } from './Row'

import { chatGPTCategorySelector } from '~atoms/chatGPTCategoryAtom'
import { chatGPTOpenAPIKeyAtom } from '~atoms/chatGPTOpenAPIKeyAtom'
import { noUserAPIKeyEnteredModalOpenAtom } from '~atoms/noUserAPIKeyEnteredModalOpenAtom'

export const NavigationBar: React.FC = () => {
  const { navigate } = useNavigation()
  const [openAPIKey] = useRecoilState(chatGPTOpenAPIKeyAtom)
  const setChatGPTCategory = useSetRecoilState(chatGPTCategorySelector)
  const setNoUserAPIKeyEnteredModalOpen = useSetRecoilState(noUserAPIKeyEnteredModalOpenAtom)
  const navigateHome = () => {
    navigate('HomeStack', { screen: 'HomeScreen' })
  }

  const navigateChat = () => {
    if (!openAPIKey) {
      setNoUserAPIKeyEnteredModalOpen(true)
      return
    }
    setChatGPTCategory(undefined)
    navigate('HomeStack', { screen: 'ChatScreen' })
  }
  return (
    <Row className="justify-evenly py-2">
      <TouchableHighlight className="justify-center items-center" onPress={navigateHome} style={styles.gap}>
        <>
          <FontAwesomeIcon icon={faHome} color="white" size={20} />
          <Text className="text-white">Home</Text>
        </>
      </TouchableHighlight>
      <TouchableHighlight className="justify-center items-center" onPress={navigateChat} style={styles.gap}>
        <>
          <FontAwesomeIcon icon={faComment} color="white" size={20} />
          <Text className="text-white">Chat</Text>
        </>
      </TouchableHighlight>
    </Row>
  )
}

const styles = StyleSheet.create({
  gap: {
    gap: 5,
  },
})
