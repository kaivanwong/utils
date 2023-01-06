# @kaivanwong/utils

JavaScript/TypeScript utils commonly used by [@kaivanwong](https://github.com/kaivanwong)

## Installation

Install dependency packages

```sh
pnpm add @kaivanwong/utils

# You can also use yarn or npm

npm install @kaivanwong/utils --s
```

You can also choose cdn to import, add this line to your index.html and play

```html
<script src="https://cdn.jsdelivr.net/npm/@kaivanwong/utils/index.min.js"></script>
```

## Example

Here's a simple way to use it. Learn more about using documents to find by table

```javascript
import { setCache } from '@kaivanwong/utils'

setCache('key','save-data')
```

## Utils Found Here

| Name                     | Description                               |
| ------------------------ | ----------------------------------------- |
| [cache](docs/cache.md)   | A general caching method based on storage |
| [regexp](docs/regexp.md) | Summary of common regular expressions     |

More tools are being integrated...

## License

[MIT licensed](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)
