# @kaivanwong/utils-validate

## Usage

For now, provide a simple form validation method

```javascript
import { simpleValidate } from '@kaivanwong/utils'

const rules = {
	name: { required: true, msg: 'Not empty' }
}

simpleValidate(rules, { name: '' }).then(({ status })=>{
	if(status){
		// xxx
	}else{

	}
})
```

This method allows you to pass in a validation function that validates a particular rule

```javascript
import { simpleValidate } from '@kaivanwong/utils'

const rules = {
	name: { required: true, msg: 'Not empty', validator: (val: any)=>{ 
		// xxx 
		// return true of false
		return true
	 }}
}
```

## License

[MIT licensed](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)