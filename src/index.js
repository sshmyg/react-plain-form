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

import runPromisesSequence from './helpers/runPromisesSequence';

/*
    TODO:
    1. How to understand valid form on submit or not, if some fields not touched
*/

const checkTypes = ['radio', 'checkbox'];

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
    const validateAll = useCallback(values => {
        let errors;

        const promisesSequence = Object.keys(fieldsProps).reduce((acc, name, i) => {
            const { onValidate } = fieldsProps[name] || {};

            if (!onValidate) {
                return acc;
            }

            acc.push(() => {
                setValidating(name, true);

                return onValidate(values)
                    .then(() => setValidating(name, false))
                    .catch(err => {
                        !errors && (errors = {});

                        errors[name] = err.message;

                        setValidating(name, false);

                        return Promise.reject(err);
                    });
            });

            return acc;
        }, []);

        return runPromisesSequence(promisesSequence)
            .then(() => Promise.resolve(values))
            .catch(() => {
                setErrors(errors);

                const err = new Error('Errors occured, see `errors` param for details');
                err.errors = errors;

                return Promise.reject(err);
            });
    }, [ fieldsProps ]);
    const activeFieldAttrs = fieldsAttrs[activeName];

    //Update value
    if (activeFieldAttrs) {
        if (checkTypes.includes(activeFieldAttrs.type)) {
            activeFieldAttrs.checked = Boolean(values[activeName]);
        } else {
            activeFieldAttrs.value = values[activeName];
        }
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
            .catch(err => {
                if (!(err instanceof Error)) {
                    console.error('err should be instance of `Error`');
                    return;
                }

                setValidating(actualCurrentName, false);
                setError(actualCurrentName, err.message);
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
        setValue: setValueCustom
    };
}
