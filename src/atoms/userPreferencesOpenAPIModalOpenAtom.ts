import { atom } from 'recoil'

export const userPreferencesOpenAPIModalOpenAtom = atom<boolean>({
  key: 'userPreferencesOpenAPIModalOpen',
  default: false,
})
