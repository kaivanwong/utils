import type { CacheOptions } from './types'

/**
 * @name cacheType
 * @description type of the cache
 * @param type
 * @return storage
 */
export const cacheType = (type: string): Storage => {
  return type === 'local' ? localStorage : sessionStorage
}

/**
 * @name setCache
 * @description write cache method
 * @param key
 * @param data
 * @param options
 */
export const setCache = (key: string, data: any, options?: CacheOptions): void => {
  key = options?.key ? `${options.key}-${key}` : key
  options = {
    type: 'session',
    template: false,
    delete: false,
    ...options,
  }
  cacheType(options.type).setItem(
    key,
    options.template
      ? JSON.stringify({
        user: options.user,
        time: new Date().getTime(),
        data: JSON.stringify(data),
        desc: options.desc,
      })
      : JSON.stringify(data),
  )
}

/**
 * @name getCache
 * @description read cache method
 * @param key
 * @param options
 * @return data
 */
export const getCache = (key: string, options?: CacheOptions): any => {
  key = options?.key ? `${options.key}-${key}` : key
  options = {
    type: 'session',
    template: false,
    delete: false,
    ...options,
  }
  const data: string | null = cacheType(options.type).getItem(key)
  if (options.delete)
    cacheType(options.type).removeItem(key)

  return (data === null || typeof data === 'undefined')
    ? options.default
      ? options.default
      : null
    : options.template
      ? data
        ? JSON.parse(data)
        : options.default
      : JSON.parse(data)
}

/**
 * @name removeCache
 * @description cache removal method
 * @param key
 * @param type
 */
export const removeCache = (key: string, options?: CacheOptions): void => {
  key = options?.key ? `${options.key}-${key}` : key
  cacheType(options?.type || 'session').removeItem(key)
}
