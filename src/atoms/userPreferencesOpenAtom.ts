import { atom } from 'recoil'

export const userPreferencesOpenAtom = atom<boolean>({
  key: 'userPreferencesOpen',
  default: false,
})
