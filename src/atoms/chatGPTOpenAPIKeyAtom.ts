import { atom } from 'recoil'

import CachedOpenAPIKeyAPI from '~apis/CachedOpenAPIKeyAPI'
import OpenAPIKeyAPI from '~apis/OpenAPIKeyAPI'

const cachedOpenAPIKeyAPI = new CachedOpenAPIKeyAPI()

export const chatGPTOpenAPIKeyAtom = atom<string | undefined>({
  key: 'chatGPTOpenAPIKey',
  default: undefined,
  effects_UNSTABLE: [
    ({ onSet, setSelf, trigger }) => {
      setSelf(cachedOpenAPIKeyAPI.getOpenAPIKey())

      onSet((newKey, currentKey) => {
        if (!currentKey && trigger === 'get') return

        if (!newKey) {
          OpenAPIKeyAPI.deleteOpenAPIKey()
        } else {
          OpenAPIKeyAPI.createOrUpdateKey(newKey)
        }
      })
    },
  ],
})
