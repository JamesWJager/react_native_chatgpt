/* eslint-disable @typescript-eslint/return-await */
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class OpenAPIKeyAPI {
  static async getItem(): Promise<string | undefined> {
    const openAPIKey = await AsyncStorage.getItem('@OpenAPIKey').catch((error: string) => {
      throw new Error(`Error getting AsyncStorage Item @OpenAPIKey: ${error}`)
    })
    return !openAPIKey ? undefined : (JSON.parse(openAPIKey) as string)
  }

  static async getOpenAPIKey(): Promise<string | undefined> {
    const openAPIKey = await this.getItem()
    return openAPIKey
  }

  static async createOrUpdateKey(key: string) {
    const openAPIKey = await this.getOpenAPIKey()

    if (!openAPIKey) {
      // create new
      return await OpenAPIKeyAPI.persist(key)
    } else {
      // update
      return await OpenAPIKeyAPI.persist(key)
    }
  }

  static async deleteOpenAPIKey() {
    await AsyncStorage.removeItem('@OpenAPIKey')
  }

  private static async persist(key: string) {
    await AsyncStorage.setItem('@OpenAPIKey', JSON.stringify(key)).catch((error: string) => {
      throw new Error(`Error setting AsyncStorage Item @OpenAPIKey: ${error}`)
    })
  }
}
