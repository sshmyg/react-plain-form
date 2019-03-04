import {
    useState,
    useEffect,
    useRef,
    useMemo,
    createRef
} from 'react';

import {
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

function useValues(fieldsConfig) {
    const [values, setValues] = useState(() => {
        return Object.keys(fieldsConfig).reduce((acc, name) => {
            const { defaultValue = '' } = fieldsConfig[name];

            acc[name] = defaultValue;

            return acc;
        }, {});
    });
    const setValuesCustom = (newValues = {}) => setValues(prevValues => ({
        ...prevValues,
        ...newValues
    }));
    const setValue = (name, value) => setValuesCustom({ [name]: value });

    return [
        values,
        setValue
    ];
}

function useUid() {
    const [uid, updateUid] = useState(Date.now());

    return [
        uid,
        () => updateUid(Date.now())
    ];
}

function useEventUid() {
    const [eventData, set] = useState({});

    return [
        eventData,
        type => {
            set({
                type,
                uid: Date.now()
            });
        }
    ];
}

/**
 * useForm
 * @param {Object} fieldsConfig
 */
export function useForm(fieldsConfig) {
    const [fieldsUid, updateFieldsUid] = useUid();
    const [eventData, updateEvent] = useEventUid();
    const [userFields, updateUserFields] = useState(fieldsConfig);
    const [values, setValue] = useValues(fieldsConfig);
    const [activeName, setActiveName] = useState();
    const [errors, setError, setErrors] = useErrors();
    const [isValidating, setValidating] = useState(false);
    const isMount = useRef(false);
    const prevActiveName = usePrevious(activeName, true);
    const {
        fieldsAttrs,
        fieldsProps
    } = useMemo(() => {
        return Object.keys(userFields).reduce((acc, name) => {
            const {
                //Attrs
                ref,
                onChange,
                onFocus,
                onBlur,
                //Props
                onValidate,
                validateOn = 'change',
                defaultValue = '',

                ...rest
            } = userFields[name];
            const value = values[name];
            const inputRef = createRef();

            acc.fieldsAttrs[name] = {
                name,
                value,
                ...rest,

                ref: el => {
                    inputRef.current = el;
                    ref && ref.current && (ref.current = el);
                },

                onChange: e => {
                    setValue(name, e.target.value);

                    updateEvent('change');

                    typeof onChange === 'function' && onChange(e);
                },

                onFocus: e => {
                    setActiveName(name);

                    updateEvent('focus');

                    typeof onFocus === 'function' && onFocus(e);
                },

                onBlur: e => {
                    setActiveName();

                    updateEvent('blur');

                    typeof onBlur === 'function' && onBlur(e);
                }
            };

            acc.fieldsProps[name] = {
                onValidate,
                validateOn,
                defaultValue,
                ref: inputRef
            };

            return acc;
        }, {
            fieldsAttrs: {},
            fieldsProps: {}
        });
    }, [fieldsUid]);
    const activeFieldAttrs = fieldsAttrs[activeName];
    const setValueCustom = (name, value) => {
        const { ref } = fieldsProps[name] || {};

        ref
            && ref.current
            && ref.current.focus();

        setValue(name, value);
        updateEvent('change');
    };

    //Update value
    if (activeFieldAttrs) {
        activeFieldAttrs.value = values[activeName];
    }

    useEffect(() => {
        //Skip validation on field mount
        if (!isMount.current) {
            isMount.current = true;
            return;
        }

        const { type } = eventData;
        //If fields is blured, than current name === last focused field;
        const actualCurrentName = type === 'blur'
            ? prevActiveName
            : activeName;
        const {
            onValidate,
            validateOn
        } = fieldsProps[actualCurrentName] || {};

        const isValidation = (new RegExp(type)).test(validateOn);

        if (typeof onValidate !== 'function' || !isValidation || isValidating) {
            return;
        }

        setValidating(true);

        onValidate(values)
            .then(() => {
                setValidating(false);
                setError(name);
            })
            .catch(errStr => {
                setValidating(false);
                setError(name, errStr);
            });
    }, [eventData.uid]);

    return {
        values,
        fields: fieldsAttrs,
        errors,
        isValidating,
        setError,
        setValue: setValueCustom
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
