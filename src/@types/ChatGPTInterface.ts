/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ChatGPTAxiosInterface {
  data: ChatGPTInterface
  status: number
  headers: Headers
  config: Config
  request: Request
}

export interface ChatGPTInterface {
  id: string
  object: string
  created: number
  model: string
  usage: Usage
  choices: Choice[]
}

export interface Usage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
}

export interface Choice {
  message: Message
  finish_reason: string
  index: number
}

export interface Message {
  role: string
  content: string
}

export interface Headers {
  'access-control-allow-origin': string
  'alt-svc': string
  'cache-control': string
  'cf-cache-status': string
  'cf-ray': string
  'content-type': string
  date: string
  'openai-model': string
  'openai-organization': string
  'openai-processing-ms': string
  'openai-version': string
  server: string
  'strict-transport-security': string
  'x-ratelimit-limit-requests': string
  'x-ratelimit-remaining-requests': string
  'x-ratelimit-reset-requests': string
  'x-request-id': string
}

export interface Config {
  transitional: Transitional
  adapter: string[]
  transformRequest: any[]
  transformResponse: any[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  env: Env
  headers: Headers2
  method: string
  url: string
  data: string
}

export interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export type Env = Record<string, unknown>

export interface Headers2 {
  Accept: string
  'Content-Type': string
  Authorization: string
}

export interface Request {
  UNSENT: number
  OPENED: number
  HEADERS_RECEIVED: number
  LOADING: number
  DONE: number
  readyState: number
  status: number
  timeout: number
  withCredentials: boolean
  upload: Upload
  _aborted: boolean
  _hasError: boolean
  _method: string
  _perfKey: string
  _response: string
  _url: string
  _timedOut: boolean
  _trackingName: string
  _incrementalEvents: boolean
  _performanceLogger: PerformanceLogger
  responseHeaders: ResponseHeaders
  _requestId: any
  _headers: Headers3
  _responseType: string
  _sent: boolean
  _lowerCaseResponseHeaders: LowerCaseResponseHeaders
  _subscriptions: any[]
  responseURL: string
}

export type Upload = Record<string, unknown>

export interface PerformanceLogger {
  _timespans: Timespans
  _extras: Extras
  _points: Points
  _pointExtras: PointExtras
  _closed: boolean
}

export interface Timespans {
  'network_XMLHttpRequest_https://api.openai.com/v1/chat/completions': NetworkXmlhttpRequestHttpsApiOpenaiComV1ChatCompletions
  'network_XMLHttpRequest_http://192.168.0.254:8081/symbolicate': NetworkXmlhttpRequestHttp19216802548081Symbolicate
}

export interface NetworkXmlhttpRequestHttpsApiOpenaiComV1ChatCompletions {
  startTime: number
  endTime: number
  totalTime: number
}

export interface NetworkXmlhttpRequestHttp19216802548081Symbolicate {
  startTime: number
  endTime: number
  totalTime: number
}

export type Extras = Record<string, unknown>

export interface Points {
  initializeCore_start: number
  initializeCore_end: number
}

export type PointExtras = Record<string, unknown>

export interface ResponseHeaders {
  'strict-transport-security': string
  'content-type': string
  date: string
  'openai-organization': string
  'cf-ray': string
  'x-ratelimit-remaining-requests': string
  server: string
  'x-ratelimit-limit-requests': string
  'x-ratelimit-reset-requests': string
  'x-request-id': string
  'openai-version': string
  'cache-control': string
  'openai-processing-ms': string
  'access-control-allow-origin': string
  'openai-model': string
  'cf-cache-status': string
  'alt-svc': string
}

export interface Headers3 {
  accept: string
  'content-type': string
  authorization: string
}

export interface LowerCaseResponseHeaders {
  'strict-transport-security': string
  'content-type': string
  date: string
  'openai-organization': string
  'cf-ray': string
  'x-ratelimit-remaining-requests': string
  server: string
  'x-ratelimit-limit-requests': string
  'x-ratelimit-reset-requests': string
  'x-request-id': string
  'openai-version': string
  'cache-control': string
  'openai-processing-ms': string
  'access-control-allow-origin': string
  'openai-model': string
  'cf-cache-status': string
  'alt-svc': string
}
