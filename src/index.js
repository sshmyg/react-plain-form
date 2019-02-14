import {
    useState
} from 'react';

/**
 * useField
 * @param {Object} props
 * @param {String|Number} [props.defaultValue = '']
 * @param {Function} [props.handleValidation = () => true]
 * @returns [
 *      {} //Valid DOM attrs,
 *      {} //Component props
 * ]
 */
function useField(props) {
    const {
        type = 'text',
        defaultValue = '',
        handleValidation = () => true,
        ...rest
    } = props;
    const [error, setError] = useState();
    const [value, setValue] = useState(String(defaultValue));

    return [
        //Valid DOM attrs
        {
            type,
            value,
            ...rest,
            onChange: e => {
                setValue(e.target.value);
            },
            onBlur: e => {

            },
            onFocus: e => {

            }
        },

        //Component props
        {
            error,
            setError,
            setValue,
            handleValidation
        }
    ];
}

/**
 * useForm
 * @param {Array} fields
 */
export function useForm(fields) {
    const res = Object.keys(fields).reduce((acc, name) => {
        const field = fields[name];

        const [attrs, props] = useField(field);
        acc.fields[name] = attrs;
        acc.values[name] = attrs.value;
        acc.validations.push(props.handleValidation);

        return acc;
    }, {
        fields: {},
        values: {},
        validations: []
    });

    return {
        ...res,
        handleSubmit: () => {
            const {
                values,
                validations
            } = res;

            validations.forEach(validate => validate(values));

            return values;
        }
    };
}
