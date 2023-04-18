import { DefaultValue } from 'recoil'

import OpenAPIKeyAPI from './OpenAPIKeyAPI'

export default class CachedOpenAPIKeyAPI {
  cachedKey: string | undefined

  private async getKey() {
    if (!this.cachedKey) {
      this.cachedKey = await OpenAPIKeyAPI.getOpenAPIKey()
    }
    return this.cachedKey
  }

  async getOpenAPIKey() {
    const openAPIKey = await this.getKey()
    if (openAPIKey === undefined) return new DefaultValue()
    return openAPIKey
  }
}
