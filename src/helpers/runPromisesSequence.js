/**
 * runPromisesSequence
 * @param {Array[Functions]} funcs
 * @param {Function} funcs[n] should return Promise
 * @returns {Object} Promise. If some of functions returns rejected Promise, returned Promise also will be rejected and contains as argument array of errors.
 */
export default function runPromisesSequence(funcs) {
    if (!Array.isArray(funcs) || !funcs.length) {
        return;
    }

    const result = [];
    const errors = [];
    let index = 0;

    function run(i, arr, cb) {
        if (i === arr.length) {
            cb();
            return;
        }

        const next = resContainer => res => {
            Array.isArray(resContainer) && resContainer.push(res);
            run(i + 1, arr, cb);
        };

        //Skip non function item
        if (typeof arr[i] !== 'function') {
            next()();
            return;
        }

        arr[i]()
            .then(next(result))
            .catch(next(errors));
    }

    return new Promise((res, rej) => {
        run(index, funcs, () => {
            errors.length
                ? rej(errors)
                : res(result);
        });
    });
}
