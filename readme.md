# React plain form
React simple form for everyday usage 😜

# Demo
[Simple example](https://codesandbox.io/s/2vx51qq50r)

## useForm({ schema })
| Name | Type | Defaults | Description |
| ------------- | ------- | :-------------:| :----- |
| `schema` | `Object` | `undefined` | Configuration object for you form |
| `schema[key]` | `String` | `undefined` | `name` prop for future input field |
| `schema[value].[any]` | `Object` | `undefined` | Any valid html5 attributes |
| `schema[value].onValidate` | `Function` | `undefined` | validation function. Get `values` as argument and should return Promise. |
| `schema[value].validateOn` | `String|Array` | `change` | Validation run on this events. Variants: `change|focus|blur` |

### Example
```javascript
import React from 'react';
import { render } from 'react-dom';
import useForm from 'react-plain-form';

function Form({ schema }) {
    const {
        fields,
        values,
        isValidating,
        errors
    } = useForm(schema);
    const isErrors = !!Object.keys(errors).length;

    console.info(values);

    return (
        <form>
            <label>
                Name
                <input {...fields.name} />
            </label>
            <label>
                Email
                <input {...fields.Email} />
            </label>
            <br/>
            <button
                type="submit"
                disabled={isValidating || !isErrors}
            >
                Submit
            </button>
            { isValidating && <p>Validating...</p> }
        </form>
    );
}

const formSchema = {
    name: { type: 'text' },

    email: {
        type: 'email',
        onValidate: values => {
            return new Promise((res, rej) => {
                const isValidEmail = (/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/).test(values.email);

                isValidEmail
                    ? res()
                    : rej(new Error('Invalid email'));
            });
        }
    }
};

render(
    <Form schema={formSchema} />,
    document.querySelector('#root')
);

```
