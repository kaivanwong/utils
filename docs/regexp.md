# @kaivanwong/utils-regexp

Summary of common regular expressions 

## All the regular expressions

| Name                             | Description                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| USERNAME                         | Length 6 to 16                                                                                |
| PASSWORD_NORMAL                  | Length 6 to 16, consisting of letters, numbers, and "_"                                       |
| PASSWORD_STRICT                  | Length 8 to 16, contains upper and lower case letters and numbers                             |
| PASSWORD_STRICT_SYMBOL           | Length 8 to 16, contains upper and lower case letters, numbers, and special characters        |
| EMAIL                            | E-mail Address                                                                                |
| MOBILE                           | Mobile phone number, 3-4 digit area code, 7-8 digit on-air number, 1-4 digit extension number |
| MOBILE_CHINA                     | Mobile phone number (China)                                                                   |
| TELEPHONE_CHINA                  | Telephone number (China)                                                                      |
| ID_CARD                          | Id card (China)                                                                               |
| QQ_ACOUNT                        | Tencent QQ Account (China)                                                                    |
| WECHAT_ACOUNT                    | Wechat Account (China)                                                                        |
| DATE                             | Date，YYYY-MM-DD                                                                              |
| DATE_TIME                        | Date time，YYYY-MM-DD hh:mm:ss                                                                |
| NUMBER_MONEY                     | Nonzero, two decimal places                                                                   |
| SPECIFIC_SYMBOL                  | Contains & ^ % '; =? $\ "and other special symbols                                            |
| SPECIAL_SYMBOL_CHINESE           | Special symbols and Chinese characters                                                        |
| POSTAL_CODE_CHINA                | Postal Code (China)                                                                           |
| IPV4                             | IPv4 Address                                                                                  |
| FILE_EXTENSION_NAME              | File extension name                                                                           |
| FILE_PATH_NAME                   | Matches any path file name                                                                    |
| XML                              | The xml file                                                                                  |
| EMPTY_LINE                       | Empty line, which can be used to delete empty lines                                           |
| HINESE                           | Chinese                                                                                       |
| NUMBER                           | Integer number                                                                                |
| NUMBER_FLOAT                     | Floating-point number                                                                         |
| NUMBER_TWO_DECIMALS              | A positive or negative number to 1 or 2 decimal places                                        |
| ENGLISH_NUMBER                   | English characters and numbers                                                                |
| CHINESE_ENGLISH_NUMBER_UNDERLINE | Numbers contain underscores                                                                   |
| CHINESE_ENGLISH_NUMBER           | Chinese, English, numbers, but do not include underscores and other symbols                   |
| ENGLISH_NUMBER_LINE              | English, digits, underscores and dash symbols                                                 |
| ENGLISH                          | 26 English letters                                                                            |
| IS_CHINESE                       | Including Chinese                                                                             |
| URL                              | Url Address                                                                                   |
| RGB                              | Hexadecimal color                                                                             |
| CAR_NO_CHINA                     | License plate check (China)                                                                   |
| IMG_SRC                          | Matches img and src                                                                           |
| HTML_REMARK                      | Matches comments in html                                                                      |
| HTML_STYLE                       | Matches the style in the html                                                                 |
| HTML_COLOR                       | Matches the color in the html                                                                 |
| HTML_TAG                         | Matching html tag                                                                             |

## License

[MIT licensed](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)