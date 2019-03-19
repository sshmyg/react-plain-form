import { useState } from 'react';

import filterObjectByEmptyValues from '../helpers/filterObjectByEmptyValues';

export default function useErrors() {
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
