import { StyleSheet, Text } from 'react-native'

import { faBookOpen, faMusic, faPen } from '@fortawesome/free-solid-svg-icons'

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

  return (
    <Column className="flex-1 bg-gray-900 justify-between">
      <Row>
        <Text className="text-white">Top</Text>
      </Row>
      <Row>
        <Text className="text-white">Header</Text>
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
    gap: 5,
  },
})
