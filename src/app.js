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

module.exports = {heads, tails, map, filter}
