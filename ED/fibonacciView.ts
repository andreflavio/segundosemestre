function factorial(n: number, stack: string = ''): number {
    console.log(stack + '88');
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1, stack + '*');
    }
}

function fibonacci(n: number, stack: string = ''): number {
    console.log(stack + '%');
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1, stack + '*') + fibonacci(n - 2, stack + '*');
    }
}

console.log('Fatorial:');
factorial(2);
console.log('Fibonacci:');
fibonacci(2);
