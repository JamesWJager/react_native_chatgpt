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
        if (!currentKey && !newKey && trigger === 'get') return

        if (!newKey) {
          OpenAPIKeyAPI.deleteOpenAPIKey().catch((error: string) => {
            throw new Error(`Error deleting AsyncStorage Item @OpenAPIKey: ${error}`)
          })
        } else {
          OpenAPIKeyAPI.createOrUpdateKey(newKey).catch((error: string) => {
            throw new Error(
              `Error creating or updating AsyncStorage Item @OpenAPIKey: ${error} ----- check OpenAPI Key: ${newKey}`,
            )
          })
        }
      })
    },
  ],
})
