import {
    renderHook,
    cleanup,
    act
} from 'react-hooks-testing-library';

import { useForm } from './index';

const fields = {
    name: {
        type: 'text'
    },

    email: {
        type: 'email'
    }
};

function getType(i) {
    return ({}).toString.call(i);
}

describe('useForm', () => {
    afterEach(cleanup);

    it('useForm should return fields', () => {
        const { result } = renderHook(() => useForm(fields));

        expect(Object.keys(result.current.fields).length).toBe(Object.keys(fields).length);
    });

    it('useForm should return appropriate props', () => {
        const { result } = renderHook(() => useForm(fields));

        expect(getType(result.current.isValidating)).toBe('[object Boolean]');
        expect(getType(result.current.values)).toBe('[object Object]');
        expect(getType(result.current.fields)).toBe('[object Object]');
        expect(getType(result.current.errors)).toBe('[object Object]');
        expect(getType(result.current.setError)).toBe('[object Function]');
        expect(getType(result.current.setValue)).toBe('[object Function]');
        expect(getType(result.current.validateAll)).toBe('[object Function]');
        expect(getType(result.current.updateFields)).toBe('[object Function]');
        expect(Object.keys(result.current).length).toBe(8);
    });
});
