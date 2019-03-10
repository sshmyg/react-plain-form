import { useState } from 'react';

export default function useValues(fieldsConfig) {
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
