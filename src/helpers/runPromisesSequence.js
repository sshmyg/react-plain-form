export default function runPromisesSequence(funcs) {
    const result = [];
    const errors = [];
    let index = 0;

    function run(i, arr, cb) {
        if (i === arr.length ) {
            cb();
            return;
        }

        if (typeof arr[i] !== 'function') {
            return;
        }

        const next = resContainer => res => {
            Array.isArray(resContainer) && resContainer.push(res);
            run(i + 1, arr, cb);
        };

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
