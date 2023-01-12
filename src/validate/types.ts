export interface IObject<T = any> {
  [key: string]: T
}

export interface SimpleValidateResult {
  status: boolean
  error?: Array<string>
}
