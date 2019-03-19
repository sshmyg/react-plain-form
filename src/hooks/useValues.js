import { useReducer } from 'react';

function reducer(state, { type, payload = {} }) {
    switch (type) {
        case 'extend':
            return {
                ...state,
                ...payload
            };
    }
}

export default function useValues() {
    const [values, dispatch] = useReducer(reducer, {});
    const setValues = values => dispatch({
        type: 'extend',
        payload: values
    });
    const setValue = (name, value) => setValues({ [name]: value });

    return [
        values,
        setValue,
        setValues
    ];
}
