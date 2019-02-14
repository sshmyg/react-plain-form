import {
    useState,
    useEffect,
    useRef
} from 'react';

import { isPromise } from './helpers';

function validateField(name, values, handler) {
    const validationRes = handler(values, name);

    if (!isPromise(validationRes)) {
        return new Promise((res, rej) => {
            const isError = typeof validationRes === 'string';
            const isSuccess = validationRes === true;

            isError && rej(validationRes);
            isSuccess && res(values);

            if (!isError && !isSuccess) {
                rej(`"handleValidation" for "${name}" returns ${validationRes}, but should return string (if error) or true (if success)`);
            }
        });
    }

    return validationRes;
}

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}

/**
 * useField
 * @param {Object} props
 * @param {String|Number} [props.defaultValue = '']
 * @param {Function} [props.handleValidation = (name, value) => new Promise(res => res(true))]
 * @returns [
 *      {} //Valid DOM attrs,
 *      {} //Component props
 * ]
 */
function useField(props) {
    const {
        defaultValue = '',
        handleValidation = (name, value) => new Promise(res => res(true)),
        ...rest
    } = props;
    const { name } = rest;
    const [error, setError] = useState();
    const [value, setValue] = useState(String(defaultValue));
    const isActive = useRef(false);

    return [
        //Valid DOM attrs
        {
            value,
            ...rest,

            onChange: e => {
                setValue(e.target.value);
            },

            onBlur: e => {
                isActive.current = false;
            },

            onFocus: e => {
                isActive.current = true;
            }
        },

        //Component props
        {
            error,
            setError,
            setValue,
            isActive: isActive.current,
            handleValidation: values => validateField(name, values, handleValidation)
                .then(r => console.info(r, 'res'))
                .catch(e => console.info(e, 'error'))
        }
    ];
}

/**
 * useForm
 * @param {Array} fields
 */
export function useForm(fieldsConfig) {
    const isMount = useRef(false);
    const res = Object.keys(fieldsConfig).reduce((acc, name) => {
        const field = fieldsConfig[name];

        const [attrs, props] = useField({
            name,
            ...field
        });
        const { isActive } = props;

        acc.fieldsAttrs[name] = attrs;
        acc.fieldsProps[name] = props;
        acc.values[name] = attrs.value;
        isActive && (acc.currentName = name);

        return acc;
    }, {
        currentName: undefined,
        fieldsAttrs: {},
        fieldsProps: {},
        values: {}
    });

    const {
        fieldsAttrs,
        fieldsProps,
        values,
        currentName
    } = res;
    const currentValue = values[currentName];

    useEffect(() => {
        //Skip validation on field mount
        if (!isMount.current) {
            isMount.current = true;
            return;
        }

        fieldsProps[currentName].handleValidation(values);
    }, [currentValue]);

    return {
        values,
        fields: fieldsAttrs,
        handleSubmit: () => {
            Object.keys(fieldsProps).forEach(key =>
                fieldsProps[key].handleValidation(values)
            );

            return values;
        }
    };
}
