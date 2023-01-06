# @kaivanwong/utils-cache

A general caching method based on storage

## Usage

This is an example of a write cache

```javascript
import { setCache } from '@kaivanwong/utils'

setCache('key', 'data')
```

Provides flexibly configurable parameters

```typescript
interface CacheOptions {
  // The default value is session, you can also use the local
  type: string
  // The default value is false, thether to use a template for formatting
  template: boolean
  // The default value is false, conversational storage
  delete: boolean
  // Read the default value of the cache
  default?: unknown
  // Template Parameters - Remarks
  desc?: string
  // Template Parameters - User
  user?: string
  // Template Parameters - Time
  time?: string
  // An additional item with a configurable prefix is provided
  key?: string
}
```

Examples of parameters

```javascript
import { setCache } from '@kaivanwong/utils'

setCache('key', 'data', {
  template: true,
  desc: 'example',
  time: new Date().getTime(),
})
```

This code indicates that the template cache is used, you can get the following effect

```javascript
console.log(
  getCache('key', {
    template: true,
  })
)

// {
//   "data": "data",
//   "desc": "example",
//   "time": 1672904249287
// }
```

Finally, you can remove the cache manually

```javascript
import { removeCache } from '@kaivanwong/utils'

removeCache('key')
```

## License

[MIT licensed](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)