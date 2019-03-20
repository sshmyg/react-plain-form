# React plain form
React simple form for everyday usage 😜

# Demo
- [Simple usage](https://codesandbox.io/s/64y1jo66on)
- [Debounced validation](https://codesandbox.io/s/1o780z69l3)
- [Custom validation](https://codesandbox.io/s/lprrqkjnm7) - lib [yup](https://github.com/jquense/yup)
- [Advanced usage](https://codesandbox.io/s/647zqqx0w3)

# Example
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
    const handleSubmit = e => {
        e && e.preventDefault();
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input {...fields.name} />
                { errors.name && <span>{errors.name}</span> }
            </label>
            <br/>
            <button
                type="submit"
                disabled={isValidating || isErrors}
            >
                Submit
            </button>
        </form>
    );
}

const formSchema = {
    name: {
        type: 'text',
        onValidate: values => new Promise((res, rej) =>
            values.name.length
                ? res()
                : rej(new Error('Name required'))
        )
    }
};

render(
    <Form schema={formSchema} />,
    document.querySelector('#root')
);

```

# API
## useForm({ schema })
| Name | Type | Defaults | Description |
| ------------- | ------- | :-------------:| :----- |
| `schema` | `Object` | `undefined` | Configuration object for you form |
| `schema[key]` | `String` | `undefined` | `name` prop for future input field |
| `schema[value].[any]` | `Object` | `undefined` | Any valid html5 attributes |
| `schema[value].onValidate` | `Function` | `undefined` | validation function. Get `values` as argument and should return Promise. |
| `schema[value].validateOn` | `String or Array` | `change` | Validation run on this events. Variants: `change focus blur` |
| `schema[value].defaultValue` | `String` | `''` | Default value 

## const {...} = useForm({ schema })
| Name | Type  | Description |
| ------------- | ------- | :----- |
| `fields` | `Object` | Same as `schema` above, but enriched with aditions methods like `onChange` etc. To make input controllable. |
| `values` | `Object` | Key, value pairs with name of your input and it current value. |
| `errors` | `Object` | Key, value pairs with name of your input and it current value. |
| `isValidating` | `Boolean` | Indicator, Does form is in validating state right now or not. |
| `setError` | `Function` | Set error for field. `setError(name, value)`. |
| `setValue` | `Function` | Set value for field. `setValue(name, value)`. |
| `validateAll` | `Function` | Run all `onValidate` concurrently. Returns promise. Usefull to run validation on submit |
| `updateFields` | `Function` | Want to add fields dynamically, pass as argument to this function new created or extended `schema` |
