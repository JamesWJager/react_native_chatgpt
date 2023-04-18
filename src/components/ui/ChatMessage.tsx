import { clsx } from 'clsx'
import { useRecoilState } from 'recoil'

import { Text } from './Text'

import { Row } from '~/components/ui/Row'
import { chatGPTCategoryAtom } from '~atoms/chatGPTCategoryAtom'
import type { MessageType } from '~atoms/chatMessagesAtom'

interface ChatMessageInterface {
  message: MessageType
}

export const ChatMessage: React.FC<ChatMessageInterface> = props => {
  const [chatGPTCategory] = useRecoilState(chatGPTCategoryAtom)
  const { message } = props

  const handleMessage = chatGPTCategory ? message.content.replace(`${chatGPTCategory}: `, '') : message.content

  const textAlign = clsx('text-black', message.role === 'user' ? 'text-right' : 'text-left')

  const chatBox = clsx(
    'p-4 m-4 rounded-lg max-w-[75vw]',
    message.role === 'user' ? 'bg-chatOutgoing self-end' : 'bg-chatIncoming self-start',
  )

  const position = clsx(message.role === 'user' ? 'justify-end' : 'justify-start')

  return (
    <Row className={position} full>
      <Row className={chatBox}>
        <Text className={textAlign} text={handleMessage} />
      </Row>
    </Row>
  )
}
