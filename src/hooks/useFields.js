import {
    useMemo,
    createRef,
    useState
} from 'react';

export default function useFields(fieldsConfig, options = {}) {
    const {
        updateEvent,
        setValues,
        setActiveName,
        values
    } = options;
    const [fields, updateFields] = useState(fieldsConfig);

    return useMemo(() => {
        const defaultValues = {};
        const res = Object.keys(fields).reduce((acc, name) => {
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
                defaultChecked = false,

                ...rest
            } = fields[name];
            const inputRef = createRef();

            //Filter default values, add to defaults only non existing in values fields
            if (!values[name]) {
                defaultValues[name] = rest.type !== 'checkbox'
                    ? defaultValue
                    : defaultChecked;
            }

            acc.fieldsAttrs[name] = {
                name,
                ...(
                    rest.type !== 'checkbox'
                        ? { value: values[name] || defaultValue }
                        : { checked: values[name] || defaultChecked }
                ),
                ...rest,

                ref: el => {
                    inputRef.current = el;
                    ref && ref.current && (ref.current = el);
                },

                onChange: e => {
                    const {
                        type,
                        value,
                        checked
                    } = e.target;
                    const actualizedValue = type === 'checkbox' ? checked : value;

                    setValues({ [name]: actualizedValue });

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
                ref: inputRef
            };

            return acc;
        }, {
            fieldsAttrs: {},
            fieldsProps: {},
            updateFields
        });

        //Set default values
        Object.keys(defaultValues).length && setValues(defaultValues);

        return res;
    }, [ fields ]);
}
