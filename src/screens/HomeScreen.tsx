import { Suspense } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { faBars, faBookOpen, faLightbulb, faMusic, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useRecoilState } from 'recoil'

import { userPreferencesOpenAtom } from '~atoms/userPreferencesOpenAtom'
import { NoUserAPIKeyEnteredModal } from '~components/modal/NoUserAPIKeyEnteredModal'
import { UserOpenAPIModal } from '~components/modal/UserOpenAPIModal'
import { UserPreferencesSidebar } from '~components/sidebar/UserPreferencesSidebar'
import { Column } from '~components/ui/Column'
import { Icon } from '~components/ui/Icon'
import { NavigationBar } from '~components/ui/NavigationBar'
import { Row } from '~components/ui/Row'

export const HomeScreen: React.FC = () => {
  const [userPreferencesOpen, setUserPreferencesOpen] = useRecoilState(userPreferencesOpenAtom)
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

  const handleOpenUserPreferences = () => {
    setUserPreferencesOpen(!userPreferencesOpen)
  }

  return (
    <Column className="flex-1 bg-gray-900 justify-evenly">
      <Row className="justify-between items-center mx-3">
        <TouchableOpacity className="flex flex-col" onPress={handleOpenUserPreferences}>
          <Row style={styles.gap}>
            <FontAwesomeIcon icon={faBars} color="white" size={20} />
            <Text className="text-white">Hello</Text>
          </Row>
        </TouchableOpacity>
        <FontAwesomeIcon icon={faLightbulb} color="white" size={20} />
      </Row>
      <Row className="h-[25%] w-full">
        <ImageBackground className="w-full" source={image}>
          <Text className="text-white">Header</Text>
        </ImageBackground>
      </Row>
      <Row full className="justify-between flex-wrap h-[60%]" style={styles.gapXL}>
        <Suspense>
          {icons.map((icon, index) => (
            <Icon key={index} name={icon.name} icon={icon.icon} color={icon.color} />
          ))}
        </Suspense>
      </Row>
      <Suspense>
        <NavigationBar />
      </Suspense>
      <UserPreferencesSidebar />
      <Suspense>
        <UserOpenAPIModal />
      </Suspense>
      <Suspense>
        <NoUserAPIKeyEnteredModal />
      </Suspense>
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
