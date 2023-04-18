import { Suspense } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'

import {
  faBars,
  faBookOpen,
  faBriefcase,
  faBullhorn,
  faGraduationCap,
  faHeart,
  faLightbulb,
  faMusic,
  faPencil,
  faServer,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
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
    { name: 'Marketing', icon: faBullhorn, color: 'bg-green-400' },
    { name: 'Business', icon: faBriefcase, color: 'bg-purple-400' },
    { name: 'Content', icon: faPencil, color: 'bg-blue-500' },
    { name: 'Web development', icon: faServer, color: 'bg-orange-500' },
    { name: 'Healthcare & Wellbeing', icon: faHeart, color: 'bg-pink-500' },
    { name: 'Teachers', icon: faGraduationCap, color: 'bg-yellow-500' },
    { name: 'Music', icon: faMusic, color: 'bg-green-600' },
    { name: 'Educational', icon: faBookOpen, color: 'bg-red-500' },
    { name: 'Food & Cooking', icon: faUtensils, color: 'bg-purple-600' },
    { name: 'Marketing', icon: faBullhorn, color: 'bg-green-400' },
    { name: 'Business', icon: faBriefcase, color: 'bg-purple-400' },
    { name: 'Content', icon: faPencil, color: 'bg-blue-500' },
    { name: 'Web development', icon: faServer, color: 'bg-orange-500' },
    { name: 'Healthcare & Wellbeing', icon: faHeart, color: 'bg-pink-500' },
    { name: 'Teachers', icon: faGraduationCap, color: 'bg-yellow-500' },
    { name: 'Music', icon: faMusic, color: 'bg-green-500' },
    { name: 'Educational', icon: faBookOpen, color: 'bg-red-500' },
    { name: 'Food & Cooking', icon: faUtensils, color: 'bg-purple-500' },
  ]
  const image = {
    uri: 'https://images.unsplash.com/photo-1680264524707-a5a18362a2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80',
  }

  const handleOpenUserPreferences = () => {
    setUserPreferencesOpen(!userPreferencesOpen)
  }

  return (
    <Column className="flex-1 bg-gray-900">
      <Row className="justify-between items-center p-3 ">
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
      <ScrollView>
        <Row full className="justify-center items-start flex-wrap flex-1 pt-3" style={styles.gap}>
          <Suspense>
            {icons.map((icon, index) => (
              <Icon key={index} name={icon.name} icon={icon.icon} color={icon.color} />
            ))}
          </Suspense>
        </Row>
      </ScrollView>
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
  gap: {
    gap: 10,
  },
})
