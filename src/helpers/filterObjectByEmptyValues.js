export default function filterObjectByEmptyValues(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        typeof value !== 'undefined' && (acc[key] = value);

        return acc;
    }, {});
}
