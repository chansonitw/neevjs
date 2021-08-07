const app = require('./app');

test('returns head of {1,2,3} as 1', () => {
    expect(app.heads([1, 2, 3])).toBe(1);
});

test('returns head of {} as undefined', () => {
    expect(app.heads([])).toBe(undefined);
});

test('returns tail of {1,2,3} as 2,3', () => {
    expect(app.tails([1, 2, 3])).toStrictEqual([2, 3]);
});

test('returns tail of {} as undefined', () => {
    expect(app.tails([])).toBe(undefined);
});

test('return map of []  as []', () => {
    expect(app.map([])).toStrictEqual([]);
});

test('return map of [1,2,3] as [1,2,3] when map function is identity', () => {
    const identity = (e) => e
    expect(app.map([1, 2, 3], identity)).toStrictEqual([1, 2, 3]);
});

test('return map of [1,2,3] as [1,8,27] when map function is cube', () => {
    const cube = (e) => e * e * e
    expect(app.map([1, 2, 3], cube)).toStrictEqual([1, 8, 27]);
});

test('return map of [{x : 10}] as [11] when map function is custom object function', () => {
    expect(app.map([{x: 10}], (e) => e.x + 1)).toStrictEqual([11]);
});

test('return filter of []  as []', () => {
    expect(app.filter([])).toStrictEqual([]);
});

test('return filter of [1,2,3]  as [1,2,3] when filter function return true', () => {
    expect(app.filter([1, 2, 3], (e) => true)).toStrictEqual([1, 2, 3]);
});

test('return filter of [1,2,3]  as [] when filter function return false', () => {
    expect(app.filter([1, 2, 3], (e) => true)).toStrictEqual([1, 2, 3]);
});

test('return filter of [1,2,3]  as [2,3] when filter function says greater than 1', () => {
    expect(app.filter([1, 2, 3], (e) => e > 1)).toStrictEqual([2,3]);
});

test('return filter of [a,B,c,D]  as [B,D] when filter function filter upper case', () => {
    expect(app.filter(['a', 'B', 'c', 'D'], (e) => e === e.toUpperCase())).toStrictEqual(['B', 'D']);
});

test('return reduce of [] as undefined', () => {
    expect(app.reduce([], (x, y) => (x + y))).toBe(undefined);
});

test('return reduce of [] as 10 when seed for reduce is 10', () => {
    expect(app.reduce([], (x, y) => (x + y), 10)).toBe(10);
});

test('return reduce of [a,b,c] as abc', () => {
    expect(app.reduce(['a', 'b', 'c'], (x, y) => (x + y))).toBe("abc");
});

test('return reduce of [a,b,c] as zabc when seed for reduce is z', () => {
    expect(app.reduce(['a', 'b', 'c'], (x, y) => (x + y), 'z')).toBe("zabc");
});

test('return max of [1,2,3,4] as 4', () => {
    expect(app.max([1, 2, 3, 4])).toBe(4)
})




