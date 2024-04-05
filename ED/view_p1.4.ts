// view.ts
import readline from 'readline';
import { compareLetters } from './model_p1.4'


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira letra: ', (letter1: string) => {
  rl.question('Digite a segunda letra: ', (letter2: string) => {
    const result = compareLetters(letter1, letter2);
    console.log(result);
    rl.close();
  });
});
