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




