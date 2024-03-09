
let palavra1 = prompt("Digite a primeira palavra: ");
let palavra2 = prompt("Digite a segunda palavra: ");

if (palavra1.charCodeAt(0) < palavra2.charCodeAt(0)) {
    console.log(`${palavra1} aparece antes de ${palavra2} no dicionário.`);
} else if (palavra1.charCodeAt(0) > palavra2.charCodeAt(0)) {
    console.log(`${palavra2} aparece antes de ${palavra1} no dicionário.`);
} else {
    console.log('As duas palavras têm a mesma primeira letra.');
}



/*

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira palavra: ', (palavra1) => {
  rl.question('Digite a segunda palavra: ', (palavra2) => {
    let i = 0;
    while (i < palavra1.length && i < palavra2.length) {
      if (palavra1.charCodeAt(i) < palavra2.charCodeAt(i)) {
        console.log(`${palavra1} aparece antes de ${palavra2} no dicionário.`);
        rl.close();
        return;
      } else if (palavra1.charCodeAt(i) > palavra2.charCodeAt(i)) {
        console.log(`${palavra2} aparece antes de ${palavra1} no dicionário.`);
        rl.close();
        return;
      }
      i++;
    }

    if (palavra1.length < palavra2.length) {
      console.log(`${palavra1} aparece antes de ${palavra2} no dicionário.`);
    } else if (palavra1.length > palavra2.length) {
      console.log(`${palavra2} aparece antes de ${palavra1} no dicionário.`);
    } else {
      console.log('As duas palavras são idênticas.');
    }

    rl.close();
  });
});
*/

