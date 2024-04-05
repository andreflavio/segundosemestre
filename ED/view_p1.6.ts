// view.ts
import * as readline from 'readline';
import { compareWords } from './model_p1.6';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita ao usuário que digite duas palavras e chama a função compareWords para compará-las
rl.question('Digite a primeira palavra: ', (word1: string) => {
    rl.question('Digite a segunda palavra: ', (word2: string) => {
        const result = compareWords(word1, word2);
        console.log(result);
        rl.close();
    });
});
