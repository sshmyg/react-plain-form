import { useState } from 'react';

export default function useValidating(defaultValues = {}) {
    const [validatingObj, setValidating] = useState(defaultValues);
    const customSetValidating = (name, sate) => setValidating(prevState => ({
        ...prevState,
        [name]: sate
    }));
    const values = Object.values(validatingObj);
    const isValidating = values.length ? !values.some(v => !v) : false;

    return [
        isValidating,
        customSetValidating,
        validatingObj
    ];
}
