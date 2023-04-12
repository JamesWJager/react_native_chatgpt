import { createRef, useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { CHATGPT_API, OPENAI_API_KEY } from 'react-native-dotenv'

import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import axios from 'axios'
import { useRecoilState } from 'recoil'

import { ChatGPTInterface } from '../@types/ChatGPTInterface'
import { chatMessageStateAtom } from '../atoms/chatMessagesAtom'
import { chatQueryAtom } from '../atoms/chatQueryAtom'
import { ErrorBoundary } from '../components/error/ErrorBoundary'
import { ChatMessage } from '../components/ui/ChatMessage'
import Column from '../components/ui/Column'
import Row from '../components/ui/Row'

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + OPENAI_API_KEY,
  },
})

export const HomeScreen: React.FC = () => {
  const [chatQuery, setChatQuery] = useRecoilState(chatQueryAtom)
  const [chatMessageState, setChatMessageState] = useRecoilState(chatMessageStateAtom)
  const submitDisabled = chatQuery.length === 0
  const [loading, setLoading] = useState(true)
  const scrollRef = createRef<ScrollView>()
  useEffect(() => {
    const lastIndex = chatMessageState?.length - 1
    if (chatMessageState.length !== 0 && chatMessageState[lastIndex]?.role === 'user') {
      axiosClient
        .post<ChatGPTInterface>(CHATGPT_API, {
          model: 'gpt-3.5-turbo',
          messages: chatMessageState,
        })
        .then(result => setChatMessageState(current => [...current, result.data.choices[0].message]))
        .catch((error: string) => {
          throw new Error(
            `Error posting message to chatGPT using model: gpt-3.5-turbo ------ message state: ${JSON.stringify(
              chatMessageState,
            )} ------ Error: ${error}`,
          )
        })
        .finally(() => setLoading(false))
    }
  }, [chatMessageState, setChatMessageState])

  const handleSubmit = () => {
    Keyboard.dismiss()
    setLoading(true)
    setChatMessageState(current => [...current, { role: 'user', content: chatQuery }])
    setChatQuery('')
  }

  const handleScrollToEnd = () => {
    scrollRef.current?.scrollToEnd({ animated: true })
  }

  return (
    <ErrorBoundary>
      <KeyboardAvoidingView className="flex-1 flex-col justify-center bg-[#274252]">
        <ScrollView
          ref={scrollRef}
          onContentSizeChange={handleScrollToEnd}
          automaticallyAdjustsScrollIndicatorInsets={true}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ flexGrow: 1 }}>
          <Column className="flex-1 gap-2 pt-[20] px-4" full>
            {chatMessageState.map((message, index) => {
              if (index === 0) return null
              return <ChatMessage key={index} message={message} />
            })}
          </Column>
          {loading && (
            <Row className="py-2" center>
              <Text className="text-[#43C2DD] text-[18px]">...Generating Response</Text>
            </Row>
          )}
        </ScrollView>
        <Row className="p-4  bg-[#274252]" center>
          <Row className="bg-[#43C2DD] rounded-full w-[75vw] p-1 items-start relative">
            <TextInput
              className="self-center flex-1 p-0 text-black rounded-full text-[16px] pl-2"
              placeholder="Ask me something!"
              placeholderTextColor="#000"
              onChangeText={setChatQuery}
              cursorColor="#21272C"
              value={chatQuery}
              onFocus={handleScrollToEnd}
            />
            <TouchableOpacity disabled={submitDisabled} className="rounded-full" onPress={handleSubmit}>
              <FontAwesomeIcon icon={faCircleArrowRight} color="#21272C" size={50} />
            </TouchableOpacity>
          </Row>
        </Row>
      </KeyboardAvoidingView>
    </ErrorBoundary>
  )
}
