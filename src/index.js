import {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    validateField,
    filterObjectByEmptyValues
} from './helpers';

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
 * @param {Function} [props.onValidate = values => Promise.resolve(true)]
 * @returns [
 *      {} //Valid DOM attrs,
 *      {} //Component props
 * ]
 */
function useField(props) {
    const {
        defaultValue = '',
        onValidate = () => Promise.resolve(true),
        ...rest
    } = props;
    const [value, setValue] = useState(String(defaultValue));
    const isActive = useRef(false);

    return [
        //Valid DOM attrs
        {
            value,
            ...rest,

            onChange: e => {
                console.info('123123');
                setValue(e.target.value);
            },

            onBlur: () => {
                isActive.current = false;
            },

            onFocus: () => {
                isActive.current = true;
            }
        },

        //Component props
        {
            setValue,
            onValidate,
            isActive: isActive.current
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

    console.info(values, 'ppp');

    useEffect(() => {
        //Skip validation on field mount
        if (!isMount.current) {
            isMount.current = true;
            return;
        }

        setValidating(true);

        fieldsProps[actualCurrentName]
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
