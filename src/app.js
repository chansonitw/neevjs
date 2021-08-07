function heads(arr) {
    return arr[0];
}

function tails(arr) {
    return arr.length === 0 ? undefined : arr.slice(1)
}

function map(arr, fn) {
    return arr.map(e => fn(e))
}

function filter(arr, fn) {
    return arr.filter(e => fn(e))
}

function reduce(arr, fn, seed) {
    return (seed === undefined) ? (arr.length === 0) ? undefined : arr.reduce(fn) : arr.reduce(fn, seed)
}

function max(ar) {
    return Math.max(...ar)
}

function min(ar) {
    return Math.min(...ar)
}

module.exports = {heads, tails, map, filter, reduce, max, min}
