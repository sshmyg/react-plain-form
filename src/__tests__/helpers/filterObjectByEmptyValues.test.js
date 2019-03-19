import filterObjectByEmptyValues from '../../helpers/filterObjectByEmptyValues';

describe('filterObjectByEmptyValues', () => {
    it('should return `undefined` without arguments', () => {
        const res = filterObjectByEmptyValues();

        expect(res).toBeUndefined();
    });

    it('should return object without keys with undefined values', () => {
        const obj = {
            a: 10,
            b: undefined,
            c: 20,
            d: undefined
        };
        const res = filterObjectByEmptyValues(obj);

        expect(Object.keys(res).length).toBe(2);
    });

    it('should return new object', () => {
        const obj = {
            a: 10,
            b: undefined,
            c: 20,
            d: undefined
        };
        const res = filterObjectByEmptyValues(obj);

        expect(Object.is(obj, res)).toBeFalsy();
    });

    it('should return empty object', () => {
        const res = filterObjectByEmptyValues(1);
        const res2 = filterObjectByEmptyValues('1');
        const res3 = filterObjectByEmptyValues(true);
        const res4 = filterObjectByEmptyValues([]);
        const res5 = filterObjectByEmptyValues(() => {});

        expect(Object.keys(res).length).toBe(0);
        expect(Object.keys(res2).length).toBe(0);
        expect(Object.keys(res3).length).toBe(0);
        expect(Object.keys(res4).length).toBe(0);
        expect(Object.keys(res5).length).toBe(0);
    });
});
