/* export function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

export function isEqual(obj, compareObj) {
    return JSON.stringify(obj) === JSON.stringify(compareObj);
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
} */

/* export function validateField(values, handler, name) {
    const validationRes = handler(values, name);

    if (!isPromise(validationRes)) {
        return Promise.resolve(validationRes);
    }

    return validationRes;
} */

export function filterObjectByEmptyValues(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        typeof value !== 'undefined' && (acc[key] = value);

        return acc;
    }, {});
}
