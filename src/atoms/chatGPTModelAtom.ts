import { atom } from 'recoil'

export const chatGPTModelAtom = atom({
  key: 'chatGPTModel',
  default: 'gpt-3.5-turbo',
})
