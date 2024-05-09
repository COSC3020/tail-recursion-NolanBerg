function fibonacci(n) {
    return fibonacciHelper(n, 0, 1);
}

function fibonacciHelper(n, a, b) {
    if (n === 0) return a;
    if (n === 1) return b;
    return fibonacciHelper(n - 1, b, a + b);
}

module.exports = { fibonacci };
