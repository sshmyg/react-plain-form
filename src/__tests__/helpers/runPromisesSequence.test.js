import runPromisesSequence from '../../helpers/runPromisesSequence';

const promisesWithError = [
    () => Promise.resolve('success'),
    () => Promise.resolve('success2'),
    () => Promise.reject('error')
];

describe('runPromisesSequence', () => {
    it('should return `undefined` without arguments', () => {
        const res = runPromisesSequence();

        expect(res).toBeUndefined();
    });

    it('should `resolved` successfully', () => {
        const res = runPromisesSequence(promisesWithError.slice(0, -1));

        return res.then(resp => {
            expect(Array.isArray(resp)).toBeTruthy();
            expect(resp.length).toBe(2);
            expect(resp[0]).toBe('success');
            expect(resp[1]).toBe('success2');
        });
    });

    it('should `catch` error', () => {
        const res = runPromisesSequence(promisesWithError);

        return res.catch(errors => {
            expect(Array.isArray(errors)).toBeTruthy();
            expect(errors.length).toBe(1);
            expect(errors[0]).toBe('error');
        });
    });

    it('should skip non function item', () => {
        const res = runPromisesSequence([
            undefined,
            ...promisesWithError.slice(0, -1),
            1,
            5
        ]);

        return res.then(resp => {
            expect(Array.isArray(resp)).toBeTruthy();
            expect(resp.length).toBe(2);
        });
    });
});
