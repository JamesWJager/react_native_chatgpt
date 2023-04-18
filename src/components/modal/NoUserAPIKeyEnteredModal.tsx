import { TouchableOpacity } from 'react-native'

import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useRecoilState } from 'recoil'

import { CustomModal } from './CustomModal'

import { noUserAPIKeyEnteredModalOpenAtom } from '~atoms/noUserAPIKeyEnteredModalOpenAtom'
import { Column } from '~components/ui/Column'
import { Row } from '~components/ui/Row'
import { Text } from '~components/ui/Text'
import colors from '~styles/colors.cjs'

export const NoUserAPIKeyEnteredModal: React.FC = () => {
  const [noUserAPIKeyEnteredModalOpen, setNoUserAPIKeyEnteredModalOpen] = useRecoilState(
    noUserAPIKeyEnteredModalOpenAtom,
  )

  const handleExit = () => {
    setNoUserAPIKeyEnteredModalOpen(false)
  }

  return (
    <CustomModal showModal={noUserAPIKeyEnteredModalOpen} defaultPadding hideBG onPressOut={handleExit}>
      <Column className="bg-backgroundPrimary rounded-md p-4">
        <Row className="justify-between">
          <Text text="Error" className="text-white text-[20px] pb-2" />
          <TouchableOpacity className="rounded-full" onPress={handleExit}>
            <FontAwesomeIcon icon={faXmarkCircle} color={colors.chatInput} size={25} />
          </TouchableOpacity>
        </Row>
        <Row className="border-white border-b-2" />
        <Row className="p-4" center>
          <Text
            text="You Must Enter Your OpenAPI key In Settings > Set OpenAP Key"
            className="text-white text-[24px]"
          />
        </Row>
      </Column>
    </CustomModal>
  )
}
