[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

Sources: Used ai for this assignment

The non-tail-recursive implementation of the Fibonacci sequence is inefficient due to repeated calculations:

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

The time complexity of this is $\Theta(2^n)$. This is because it recalculates the Fibonacci numbers for each recursive call.

The tail-recursive implementation of the Fibonacci sequence avoids repeated calculations.

```javascript
function fibonacci(n) {
    return fibonacciHelper(n, 0, 1);
}

function fibonacciHelper(n, a, b) {
    if (n === 0) return a;
    if (n === 1) return b;
    return fibonacciHelper(n - 1, b, a + b);
}
```

In this tail-recursive implementation, the function uses a constant amount of space for each call because the recursive call is the last operation in the function. The time complexity is $\Theta(n)$.
