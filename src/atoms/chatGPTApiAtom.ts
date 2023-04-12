import { atom } from 'recoil'

export const chatGPTApiAtom = atom({
  key: 'chatGPTApi',
  default: 'https://api.openai.com/v1/chat/completions',
})
