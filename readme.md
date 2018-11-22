# React plain form
React simple form for everyday usage 😜


## Parameters
| Name | Type | Description |
| ------------- | :-------------:| :----- |
| `defaultValues` | `Object` | Key is input name, value id default input value |
| `validateOnChange` | `Boolean` | Validate on input change or not |
| `validateOnBlur` | `Boolean` | Validate on blur or not __(not ready in progress)__ |
| `validateOnFocus` | `Boolean` | Validate on focus or not __(not ready in progress)__ |
| `onValidation` | `Function` | Invoke on every single field during validation process. Get 2 arguments, `name`, 'value' and should return Promise in appropriate state (resolved or rejected). Reject should contains `{name: 'error'}` with name as key and value as error description |
| `onSubmit` | `Function` | Invoke on form submit, if there are no errors and form validating isn't in progress. Get single argument - object with form values |

### Example
```javascript
import PlainForm from 'react-plain-form';

<PlainForm
    validateOnChange={false}
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
