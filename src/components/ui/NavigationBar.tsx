import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { faComment, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Row } from './Row'

export const NavigationBar: React.FC = () => {
  const { navigate } = useNavigation()
  const navigateHome = () => {
    navigate('HomeStack', { screen: 'Home' })
  }

  const navigateChat = () => {
    navigate('HomeStack', { screen: 'Chat' })
  }
  return (
    <Row className="justify-evenly">
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
