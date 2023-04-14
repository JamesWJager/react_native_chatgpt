import { ImageBackground, StyleSheet, Text } from 'react-native'

import { faBars, faBookOpen, faLightbulb, faMusic, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Column } from '~components/ui/Column'
import { Icon } from '~components/ui/Icon'
import { NavigationBar } from '~components/ui/NavigationBar'
import { Row } from '~components/ui/Row'

export const HomeScreen: React.FC = () => {
  const icons = [
    { name: 'Music', icon: faMusic, color: 'bg-yellow-500' },
    { name: 'Content', icon: faPen, color: 'bg-red-500' },
    { name: 'Education', icon: faBookOpen, color: 'bg-green-500' },
    { name: 'Music', icon: faMusic, color: 'bg-yellow-500' },
    { name: 'Content', icon: faPen, color: 'bg-red-500' },
    { name: 'Education', icon: faBookOpen, color: 'bg-green-500' },
    { name: 'Music', icon: faMusic, color: 'bg-yellow-500' },
    { name: 'Content', icon: faPen, color: 'bg-red-500' },
    { name: 'Education', icon: faBookOpen, color: 'bg-green-500' },
    { name: 'Music', icon: faMusic, color: 'bg-yellow-500' },
    { name: 'Content', icon: faPen, color: 'bg-red-500' },
    { name: 'Education', icon: faBookOpen, color: 'bg-green-500' },
  ]
  const image = {
    uri: 'https://images.unsplash.com/photo-1680264524707-a5a18362a2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80',
  }

  return (
    <Column className="flex-1 bg-gray-900 justify-evenly">
      <Row className="justify-between items-center mx-3">
        <Row style={styles.gap}>
          <FontAwesomeIcon icon={faBars} color="white" size={20} />
          <Text className="text-white">Hello</Text>
        </Row>
        <FontAwesomeIcon icon={faLightbulb} color="white" size={20} />
      </Row>
      <Row className="h-[25%] w-full">
        <ImageBackground className="w-full" source={image}>
          <Text className="text-white">Header</Text>
        </ImageBackground>
      </Row>
      <Row full className="justify-between flex-wrap h-[60%]" style={styles.gapXL}>
        {icons.map((icon, index) => (
          <Icon key={index} name={icon.name} icon={icon.icon} color={icon.color} />
        ))}
      </Row>
      <NavigationBar />
    </Column>
  )
}

const styles = StyleSheet.create({
  gapXL: {
    rowGap: 30,
  },
  gap: {
    gap: 10,
  },
})
