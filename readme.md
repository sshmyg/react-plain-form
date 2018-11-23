# React plain form
React simple form for everyday usage 😜


# Demo
[Simple example](https://codesandbox.io/s/2vx51qq50r)

## Parameters
| Name | Type | Defaults | Description |
| ------------- | ------- | :-------------:| :----- |
| `defaultValues` | `Object` | `undefined` | Key is input name, value id default input value |
| `validateOnChange` | `Boolean` | `true` | Validate on input change or not |
| `onValidation` | `Function` | `(name, value) => new Promise(res => res(true))` | Invoke on every single field during validation process. Get 2 arguments, `name`, 'value' and should return Promise in appropriate state (resolved or rejected). Reject should contains `{name: 'error'}` with name as key and value as error description |
| `onSubmit` | `Function` | `() => {}` | Invoke on form submit, if there are no errors and form validating isn't in progress. Get single argument - object with form values |

### Example
```javascript
import PlainForm from 'react-plain-form';

<PlainForm
    defaultValues={{
        name: 'Foo',
        sname: 'Bar'
    }}
    onValidation={(name, value) => {
        return new Promise((res, rej) => {
            !value
                ? rej({ [name]: 'Field require' })
                : res()
        })
    }}
    onSubmit={formData => {
        console.log(formData)
    }}
>
</PlainForm>
```
