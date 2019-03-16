import {
    useState,
    useEffect,
    useRef,
    useMemo,
    createRef,
    useCallback
} from 'react';

import usePrevious from './hooks/usePrevious';
import useErrors from './hooks/useErrors';
import useValues from './hooks/useValues';
import useUid from './hooks/useUid';
import useEventUid from './hooks/useEventUid';
import useValidating from './hooks/useValidating';

/*
    TODO:
    1. Update fields method
    2. Method for validation all fields
*/

/**
 * useForm
 * @param {Object} fieldsConfig
 */
export function useForm(fieldsConfig) {
    const [fieldsUid, updateFieldsUid] = useUid();
    const [eventData, updateEvent] = useEventUid();
    const [userFields, updateFields] = useState(fieldsConfig);
    const [values, setValue] = useValues(fieldsConfig);
    const [activeName, setActiveName] = useState();
    const [errors, setError, setErrors] = useErrors();
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
    const [isValidating, setValidating] = useValidating();
    const activeFieldAttrs = fieldsAttrs[activeName];
    const setValueCustom = useCallback((name, value) => {
        const { ref } = fieldsProps[name] || {};

        ref
            && ref.current
            && ref.current.focus();

        setValue(name, value);
        updateEvent('change');
    }, []);
    const validateAll = useCallback(async values => {
        let res;

        for (const key of Object.keys(fieldsProps)) {
            const { onValidate } = fieldsProps[key] || {};

            if (typeof onValidate !== 'function') {
                continue;
            }

            setValidating(key, true);

            try {
                await onValidate(values);
                setValidating(key, false);
            } catch (error) {
                !res && (res = {});

                res[key] = error;

                setValidating(key, false);
            }
        }

        if (res) {
            setErrors(res);
            return Promise.reject(res);
        }
    }, [ fieldsProps ]);

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

        if (typeof onValidate !== 'function' || !isValidation) {
            return;
        }

        setValidating(actualCurrentName, true);

        onValidate(values)
            .then(() => {
                setValidating(actualCurrentName, false);
                setError(actualCurrentName);
            })
            .catch(errStr => {
                setValidating(actualCurrentName, false);
                setError(actualCurrentName, errStr);
            });
    }, [eventData.uid]);

    return {
        values,
        fields: fieldsAttrs,
        errors,
        isValidating,
        setError,
        validateAll,
        setValue: setValueCustom,
    };
}
