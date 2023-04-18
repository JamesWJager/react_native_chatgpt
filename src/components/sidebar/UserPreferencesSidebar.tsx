import { Modal, TouchableOpacity } from 'react-native'

import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { userPreferencesOpenAPIModalOpenAtom } from '~atoms/userPreferencesOpenAPIModalOpenAtom'
import { userPreferencesOpenAtom } from '~atoms/userPreferencesOpenAtom'
import { Column } from '~components/ui/Column'
import { Row } from '~components/ui/Row'
import { Text } from '~components/ui/Text'
import colors from '~styles/colors.cjs'

export const UserPreferencesSidebar: React.FC = () => {
  const [userPreferencesOpen, setUserPreferencesOpen] = useRecoilState(userPreferencesOpenAtom)
  const setUserPreferencesOpenAPIModalOpen = useSetRecoilState(userPreferencesOpenAPIModalOpenAtom)

  const handleOpenUserOpenAPIKeyModal = () => {
    setUserPreferencesOpenAPIModalOpen(true)
    setUserPreferencesOpen(false)
  }

  const handleExit = () => {
    setUserPreferencesOpen(false)
  }

  return (
    <Modal animationType="fade" transparent={true} visible={userPreferencesOpen}>
      <Column className="absolute top-0 left-0 bg-backgroundPrimary rounded-md p-4">
        <Row className="justify-between pb-2 items-center">
          <Text text="Welcome" className="text-white" />
          <TouchableOpacity className="rounded-full" onPress={handleExit}>
            <FontAwesomeIcon icon={faXmarkCircle} color={colors.chatInput} size={20} />
          </TouchableOpacity>
        </Row>
        <Row className="border-white border-b-2" />
        <TouchableOpacity className="p-4 rounded-md" onPress={handleOpenUserOpenAPIKeyModal}>
          <Text text="Set OpenAPI Key" className="text-[20px] text-chatInput" />
        </TouchableOpacity>
      </Column>
    </Modal>
  )
}
