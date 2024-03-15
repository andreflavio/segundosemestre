import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Adicione ': string' após 'num1' e 'num2' para fornecer explicitamente o tipo
rl.question('Digite o primeiro número: ', (num1: string) => {
  rl.question('Digite o segundo número: ', (num2: string) => {
    const number1 = Number(num1);
    const number2 = Number(num2);

    if (number1 > number2) {
      console.log(`O maior número é ${number1}`);
    } else if (number2 > number1) {
      console.log(`O maior número é ${number2}`);
    } else {
      console.log('Os números são iguais');
    }

    rl.close();
  });
});
