// view.ts
import * as readline from 'readline';
import { compareWords } from './modelp1.5';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira palavra: ', (word1: string) => {
  rl.question('Digite a segunda palavra: ', (word2: string) => {
    const result = compareWords(word1, word2);
    console.log(result);
    rl.close();
  });
});
