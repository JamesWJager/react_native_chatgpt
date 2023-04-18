import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'

import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useRecoilState } from 'recoil'

import { CustomModal } from './CustomModal'

import { chatGPTOpenAPIKeyAtom } from '~atoms/chatGPTOpenAPIKeyAtom'
import { userPreferencesOpenAPIModalOpenAtom } from '~atoms/userPreferencesOpenAPIModalOpenAtom'
import { ErrorBoundary } from '~components/error/ErrorBoundary'
import { Column } from '~components/ui/Column'
import { Row } from '~components/ui/Row'
import { Text } from '~components/ui/Text'
import colors from '~styles/colors.cjs'

export const UserOpenAPIModal: React.FC = () => {
  const [openAPIKey, setOpenAPIKey] = useRecoilState(chatGPTOpenAPIKeyAtom)
  const [userPreferencesOpenAPIModalOpen, setUserPreferencesOpenAPIModalOpen] = useRecoilState(
    userPreferencesOpenAPIModalOpenAtom,
  )

  const handleSubmit = () => {
    setUserPreferencesOpenAPIModalOpen(false)
  }

  const handleExit = () => {
    setUserPreferencesOpenAPIModalOpen(false)
  }

  return (
    <KeyboardAvoidingView>
      <ErrorBoundary>
        <CustomModal showModal={userPreferencesOpenAPIModalOpen} defaultPadding hideBG>
          <Column className="bg-backgroundPrimary rounded-md p-4">
            <Row className="justify-between">
              <Text text="Enter Your OpenAPI key" className="text-white text-[20px] pb-2" />
              <TouchableOpacity className="rounded-full" onPress={handleExit}>
                <FontAwesomeIcon icon={faXmarkCircle} color={colors.chatInput} size={25} />
              </TouchableOpacity>
            </Row>
            <Row className="border-white border-b-2" />
            <Row className="p-4" center>
              <Row className="rounded-full w-[75vw] p-1 items-start relative bg-chatInput">
                <TextInput
                  className="self-center flex-1 py-0 text-black rounded-full text-[16px] px-2"
                  placeholder="Enter Open API Key"
                  placeholderTextColor="#000"
                  onChangeText={setOpenAPIKey}
                  cursorColor={colors.backgroundPrimary}
                  value={openAPIKey}
                  onSubmitEditing={handleSubmit}
                />
                <TouchableOpacity className="rounded-full" onPress={handleSubmit}>
                  <FontAwesomeIcon icon={faCheckCircle} color={colors.backgroundPrimary} size={50} />
                </TouchableOpacity>
              </Row>
            </Row>
          </Column>
        </CustomModal>
      </ErrorBoundary>
    </KeyboardAvoidingView>
  )
}
