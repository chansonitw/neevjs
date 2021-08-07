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



