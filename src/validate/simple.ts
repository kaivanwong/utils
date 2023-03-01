import type { IObject, SimpleValidateResult } from './types'

/**
 * @name simpleValidate
 * @description Simple form validation methods
 * @param rules Validate Rules
 * @param form Form Objects
 * @return SimpleValidateResult
 */
export const simpleValidate = (rules: IObject, form: IObject): Promise<SimpleValidateResult> => {
  return new Promise((resolve) => {
    const error: Array<string> = []
    for (const key in rules) {
      if (rules[key] && rules[key].required) {
        if (!form[key]) {
          error.push(rules[key].msg)
        }
        else {
          if (rules[key].validator) {
            try {
              rules[key].validator(form[key])
            }
            catch (err: any) {
              error.push(err?.message)
            }
          }
        }
      }
    }
    if (error.length > 0)
      resolve({ status: false, error })

    else
      resolve({ status: true })
  })
}
