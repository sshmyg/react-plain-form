import {
    useState,
    useCallback
} from 'react';

export default function useValidating(defaultValues = {}) {
    const [validatingObj, setValidating] = useState(defaultValues);
    const values = Object.values(validatingObj);
    const isValidating = values.length ? !values.some(v => !v) : false;
    const customSetValidating = useCallback((name, sate) => {
        return setValidating(prevState => ({
            ...prevState,
            [name]: sate
        }));
    }, []);

    return [
        isValidating,
        customSetValidating,
        validatingObj
    ];
}
