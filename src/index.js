import {
    useState,
    useEffect,
    useRef,
    useCallback
} from 'react';

import usePrevious from './hooks/usePrevious';
import useErrors from './hooks/useErrors';
import useValues from './hooks/useValues';
import useEventUid from './hooks/useEventUid';
import useValidating from './hooks/useValidating';
import useFields from './hooks/useFields';

/*
    TODO:
    1. How to understand valid form on submit or not, if some fields not touched
*/

/**
 * useForm
 * @param {Object} schema
 * @param {Any} schema.<any> - could contains any valid html5 attr
 * @param {Function} [schema.onValidate] - validation function. Get `values` as argument and should return Promise
 * @param {String|Array} [schema.validateOn]="change" - events for validation, could be `change|focus|blur`
 */
export function useForm(schema) {
    const [eventData, updateEvent] = useEventUid();
    const [values, setValue, setValues] = useValues();
    const [activeName, setActiveName] = useState();
    const [errors, setError, setErrors] = useErrors();
    const isMount = useRef(false);
    const prevActiveName = usePrevious(activeName);
    const {
        fieldsAttrs,
        fieldsProps,
        updateFields
    } = useFields(schema, {
        updateEvent,
        setActiveName,
        setValues,
        values
    });
    const [isValidating, setValidating] = useValidating();
    const setValueCustom = useCallback((name, value) => {
        const { ref } = fieldsProps[name] || {};

        ref
            && ref.current
            && ref.current.focus();

        setValue(name, value);
        updateEvent('change');
    }, [fieldsProps]);
    const validateAll = useCallback(async values => {
        let errors;

        for (const name of Object.keys(fieldsProps)) {
            const { onValidate } = fieldsProps[name] || {};

            if (typeof onValidate !== 'function') {
                continue;
            }

            setValidating(name, true);

            try {
                await onValidate(values);
                setValidating(name, false);
            } catch (error) {
                !errors && (errors = {});

                errors[name] = error;

                setValidating(name, false);
            }
        }

        if (errors) {
            setErrors(errors);
            return Promise.reject(errors);
        }
    }, [ fieldsProps ]);
    const activeFieldAttrs = fieldsAttrs[activeName];

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
        isValidating,
        fields: fieldsAttrs,
        values,
        errors,
        setError,
        validateAll,
        updateFields,
        setValue: setValueCustom,
    };
}
