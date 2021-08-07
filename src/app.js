function heads(arr) {
    return arr[0];
}

function tails(arr) {
    return arr.length === 0 ? undefined : arr.slice(1)
}


module.exports = {heads,tails}
