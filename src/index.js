import {
    useState,
    useEffect,
    useRef
} from 'react';

import { filterObjectByEmptyValues } from './helpers';

function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}

function useErrors() {
    const [errors, setErrors] = useState({});
    const customSetErrors = currentErrors => setErrors(prevErrors =>
        filterObjectByEmptyValues({
            ...prevErrors,
            ...currentErrors
        })
    );
    const customSetError = (name, value) => customSetErrors({ [name]: value });

    return [
        errors,
        customSetError,
        customSetErrors
    ];
}

/**
 * useField
 * @param {Object} props
 * @param {String|Number} [props.defaultValue = '']
 * @param {Function} [props.onValidate]
 * @returns [
 *      {} //Valid DOM attrs,
 *      {} //Component props
 * ]
 */
function useField(props) {
    const {
        defaultValue = '',
        onValidate,
        ref,
        onChange,
        onFocus,
        onBlur,
        ...rest
    } = props;
    const [value, setValue] = useState(String(defaultValue));
    const isActive = useRef(false);
    const inputRef = useRef();
    const setValueWrapper = (...args) => {
        inputRef.current && inputRef.current.focus();
        setValue(...args);
    };

    return [
        //Valid DOM attrs
        {
            value,
            ...rest,

            ref: el => {
                inputRef.current = el;
                ref && ref.current && (ref.current = el);
            },

            onChange: e => {
                setValue(e.target.value);

                typeof onChange === 'function' && onChange(e);
            },

            onFocus: e => {
                isActive.current = true;

                typeof onFocus === 'function' && onFocus(e);
            },

            onBlur: e => {
                isActive.current = false;

                typeof onBlur === 'function' && onBlur(e);
            }
        },

        //Component props
        {
            onValidate,
            setValue: setValueWrapper,
            isActive: isActive.current,
            ref: inputRef
        }
    ];
}

/**
 * useForm
 * @param {Array} fields
 */
export function useForm(fieldsConfig) {
    const [errors, setError, setErrors] = useErrors();
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
    //If fields is blured, than current name === last focused field;
    const actualCurrentName = currentName || prevCurrentName;
    const setValue = (name, value) => fieldsProps[name] && fieldsProps[name].setValue(value);

    useEffect(() => {
        //Skip validation on field mount
        if (!isMount.current) {
            isMount.current = true;
            return;
        }

        const field = fieldsProps[actualCurrentName];

        if (!field || !field.onValidate) {
            return;
        }

        setValidating(true);

        field
            .onValidate(values)
            .then(() => {
                setValidating(false);
                setError(actualCurrentName);
            })
            .catch(errStr => {
                setValidating(false);
                setError(actualCurrentName, errStr);
            });
    }, [currentValue]);

    return {
        values,
        fields: fieldsAttrs,
        errors,
        isValidating,
        setError,
        setValue
        /* handleSubmit: () => {
            const validations = Object.keys(fieldsProps).map(key =>
                fieldsProps[key].onValidate(values)
            );

            setValidating(true);

            Promise.all(validations)
                .then(() => setValidating(false))
                .catch(err => {
                    setValidating(false);
                    setErrors(err);
                });

            return values;
        } */
    };
}
