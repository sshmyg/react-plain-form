import {
    useState,
    useEffect,
    useRef
} from 'react';

import { validateField } from './helpers';

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}

function useErrors() {
    const [errors, setErors] = useState({});
    const customSetErrors = customErrors => setErors({
        ...errors,
        ...customErrors
    });

    return [
        errors,
        customSetErrors
    ];
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
        handleValidation = (values, name) => new Promise(res => res(true)),
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
            handleValidation: values => validateField(values, handleValidation, name)
        }
    ];
}

/**
 * useForm
 * @param {Array} fields
 */
export function useForm(fieldsConfig) {
    const [errors, setErors] = useErrors();
    const isMount = useRef(false);
    const [isValidating, setValidating] = useState(false);
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
    const prevCurrentName = usePrevious(currentName);

    useEffect(() => {
        //Skip validation on field mount
        if (!isMount.current) {
            isMount.current = true;
            return;
        }

        const actualCurrentName = currentName || prevCurrentName;

        setValidating(true);
        fieldsProps[actualCurrentName]
            .handleValidation(values)
            .then(res => {
                setValidating(false);
            })
            .catch(errStr => {
                setValidating(false);
                setErors({ [actualCurrentName]: errStr });
            });
    }, [currentValue]);

    console.info(isValidating);

    return {
        values,
        fields: fieldsAttrs,
        errors,
        isValidating,
        handleSubmit: () => {
            /* Object.keys(fieldsProps).forEach(key =>
                fieldsProps[key].handleValidation(values)
            ); */

            return values;
        }
    };
}
