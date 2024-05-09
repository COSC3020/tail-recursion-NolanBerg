const { fibonacci } = require('./code');

describe('Fibonacci Tests', () => {
    test('Fibonacci of 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('Fibonacci of 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('Fibonacci of 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('Fibonacci of 20', () => {
        expect(fibonacci(20)).toBe(6765);
    });
});
