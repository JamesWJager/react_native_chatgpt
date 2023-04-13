import { atom } from 'recoil'

export type MessageType = {
  role: string
  content: string
}

export const chatMessageIdsState = atom<string[]>({
  key: 'chatMessageIds',
  default: [],
})

export const chatMessageStateAtom = atom<MessageType[]>({
  key: 'chatMessageState',
  default: [
    {
      role: 'user',
      content: 'Hello!',
    },
  ],
})
