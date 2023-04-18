import { useEffect, useRef, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { CHATGPT_API } from 'react-native-dotenv'

import type { ChatGPTInterface } from '~@types/ChatGPTInterface'

import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import axios from 'axios'
import { useRecoilState } from 'recoil'

import { chatGPTCategoryAtom } from '~atoms/chatGPTCategoryAtom'
import { chatGPTOpenAPIKeyAtom } from '~atoms/chatGPTOpenAPIKeyAtom'
import { chatMessageStateAtom } from '~atoms/chatMessagesAtom'
import { chatQueryAtom } from '~atoms/chatQueryAtom'
import { ErrorBoundary } from '~components/error/ErrorBoundary'
import { ChatMessage } from '~components/ui/ChatMessage'
import { Column } from '~components/ui/Column'
import { Row } from '~components/ui/Row'
import { Text } from '~components/ui/Text'
import colors from '~styles/colors.cjs'

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

export const ChatScreen: React.FC = () => {
  const [chatQuery, setChatQuery] = useRecoilState(chatQueryAtom)
  const [chatMessageState, setChatMessageState] = useRecoilState(chatMessageStateAtom)
  const [chatGPTOpenAPIKey] = useRecoilState(chatGPTOpenAPIKeyAtom)
  const [chatGPTCategory] = useRecoilState(chatGPTCategoryAtom)
  const submitDisabled = chatQuery.length === 0
  const lastIndex = chatMessageState?.length - 1
  const [loading, setLoading] = useState(chatMessageState[lastIndex]?.role === 'user')
  const scrollRef = useRef<ScrollView>(null)
  axiosClient.defaults.headers.common.Authorization = !chatGPTOpenAPIKey ? null : 'Bearer ' + chatGPTOpenAPIKey

  useEffect(() => {
    if (chatMessageState[lastIndex]?.role === 'user') {
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
            )} ------ Error: ${error} ------ Please Check that your OpenAPI Key has been entered correctly: ${
              chatGPTOpenAPIKey ?? 'There is no key'
            }`,
          )
        })
        .finally(() => {
          setLoading(false)
          setChatQuery('')
        })
    }
  }, [chatGPTOpenAPIKey, chatMessageState, chatQuery.length, lastIndex, setChatMessageState, setChatQuery])

  const handleSubmit = () => {
    if (submitDisabled) return
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
      <KeyboardAvoidingView className="flex-1 flex-col justify-center bg-backgroundPrimary">
        <ScrollView
          ref={scrollRef}
          onContentSizeChange={handleScrollToEnd}
          automaticallyAdjustsScrollIndicatorInsets={true}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ flexGrow: 1 }}>
          <Column className="flex-1 gap-2 pt-[20] px-4" full>
            {chatGPTCategory && (
              <Row>
                <Text className="text-chatInput" text={`Selected Category: ${chatGPTCategory}`} />
              </Row>
            )}
            {chatMessageState.map((message, index) => {
              if (index === 0) return null
              return <ChatMessage key={index} message={message} />
            })}
          </Column>
          {loading && (
            <Row className="py-2" center>
              <Text className="text-[#43C2DD] text-[18px]" text="...Generating Response" />
            </Row>
          )}
        </ScrollView>
        <Row className="p-4 bg-backgroundPrimary" center>
          <Row className="rounded-full w-[75vw] p-1 items-start relative bg-chatInput">
            <TextInput
              className="self-center flex-1 py-0 text-black rounded-full text-[16px] px-2"
              placeholder="Ask me something!"
              placeholderTextColor="#000"
              onChangeText={setChatQuery}
              cursorColor={colors.backgroundPrimary}
              value={chatQuery}
              onFocus={handleScrollToEnd}
              onSubmitEditing={handleSubmit}
            />
            <TouchableOpacity disabled={submitDisabled} className="rounded-full" onPress={handleSubmit}>
              <FontAwesomeIcon icon={faCircleArrowRight} color={colors.backgroundPrimary} size={50} />
            </TouchableOpacity>
          </Row>
        </Row>
      </KeyboardAvoidingView>
    </ErrorBoundary>
  )
}
