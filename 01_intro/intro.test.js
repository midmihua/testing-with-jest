const { add, nativeNull } = require('./intro');

describe('add function', () => {

    test('should return sum of two numbers', () => {

        expect(add(2, 3)).toBe(5);
        expect(add(2, 4)).toEqual(6);
    });

    test('should return correct value', () => {

        expect(add(2, 3)).toBeGreaterThan(4);
        expect(add(2, 3)).toBeGreaterThanOrEqual(5);
    });

    test('should return correct value of float', () => {

        // expect(add(0.1, 0.2)).toBe(0.3); // Received: 0.30000000000000004
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

describe('nativeNull function', () => {

    test('should return null value', () => {

        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();
    });
});
