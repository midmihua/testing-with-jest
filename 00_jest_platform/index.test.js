const diff = require('jest-diff').default;

describe('jest-diff', () => {

    const a = { a: { b: { c: 5 } } };
    const b = { a: { b: { c: 6 } } };

    test('jest-diff', () => {
        const result = diff(a, b);
        console.log(result);
    });
});
