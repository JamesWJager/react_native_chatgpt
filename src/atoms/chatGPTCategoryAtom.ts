import { atom, DefaultValue, selector } from 'recoil'

import { chatMessageStateAtom } from './chatMessagesAtom'

export const chatGPTCategoryAtom = atom<string | undefined>({
  key: 'chatGPTCategory',
  default: undefined,
})

export const chatGPTCategorySelector = selector({
  key: 'chatGPTCategorySelector',
  get: ({ get }) => {
    const chatGPTCategory = get(chatGPTCategoryAtom)
    return chatGPTCategory
  },
  set: ({ set }, newValue) => {
    set(chatGPTCategoryAtom, newValue)
    set(chatMessageStateAtom, new DefaultValue())
  },
})
