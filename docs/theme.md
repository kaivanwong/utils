# @kaivanwong/utils-theme

Some useful methods for building themes

## Usage

Here is a way to generate themes for primary and secondary colors

```javascript
import { colorMix } from '@kaivanwong/utils'

const element = document.documentElement;

for (let i = 1; i < 10; i += 1) {
    element.style.setProperty(
      `--theme-color-primary-light-${i}`,
      colorMix(color, '#ffffff', i * 0.1)
    );
}

element.style.setProperty(`--theme-color-primary-dark-2`, colorMix(color, '#000000', 0.2));
```

The results generated are as follows

| CSS Var                       | Color   |
| ----------------------------- | ------- |
| --theme-color-primary         | #b90b0b |
| --theme-color-primary-light-1 | #c02323 |
| --theme-color-primary-light-2 | #c73c3c |
| --theme-color-primary-light-3 | #ce5454 |
| --theme-color-primary-light-4 | #d56d6d |
| --theme-color-primary-light-5 | #dc8585 |
| --theme-color-primary-light-6 | #e39d9d |
| --theme-color-primary-light-7 | #eab6b6 |
| --theme-color-primary-light-8 | #f1cece |
| --theme-color-primary-light-9 | #f8e7e7 |
| --theme-color-primary-dark-2  | #940909 |

## License

[MIT licensed](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)