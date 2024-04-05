import { compareNumbers } from './model_p1.12';
const promptSync = require('prompt-sync')({sigint: true});

let n1 = Number(promptSync("Digite o primeiro número (n1): "));
let n2 = Number(promptSync("Digite o segundo número (n2): "));

console.log(compareNumbers(n1, n2));
