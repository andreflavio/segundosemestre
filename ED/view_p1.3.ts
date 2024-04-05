//view

import { createInterface } from 'readline';
import { compareNumbers } from './modelp1.3';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1: string) => {
    rl.question('Digite o segundo número: ', (num2: string) => {
        const result = compareNumbers(Number(num1), Number(num2));
        console.log(result);
        rl.close();
    });
});
