import { atom } from 'recoil'

export const chatGPTCategoryAtom = atom<string>({
  key: 'chatGPTCategory',
  default: '',
})
