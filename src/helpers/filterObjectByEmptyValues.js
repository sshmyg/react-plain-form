export default function filterObjectByEmptyValues(obj) {
    if (!obj) {
        return;
    }

    if (typeof obj === 'string') {
        return {};
    }

    return Object.entries(obj).reduce((acc, [key, value]) => {
        typeof value !== 'undefined' && (acc[key] = value);

        return acc;
    }, {});
}
