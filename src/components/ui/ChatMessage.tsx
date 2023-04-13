import { Text } from 'react-native'

import { clsx } from 'clsx'

import { MessageType } from '../../atoms/chatMessagesAtom'

import Row from './Row'

interface ChatMessageInterface {
  message: MessageType
}

export const ChatMessage: React.FC<ChatMessageInterface> = props => {
  const { message } = props

  const textAlign = clsx('text-black', message.role === 'user' ? 'text-right' : 'text-left')

  const chatBox = clsx(
    'p-4 m-4 rounded-lg max-w-[75vw]',
    message.role === 'user' ? 'bg-[#E2E2E2] self-end' : 'bg-[#B1E5F0] self-start',
  )

  const position = clsx(message.role === 'user' ? 'justify-end' : 'justify-start')

  return (
    <Row className={position} full>
      <Row className={chatBox}>
        <Text className={textAlign}>{message.content}</Text>
      </Row>
    </Row>
  )
}
