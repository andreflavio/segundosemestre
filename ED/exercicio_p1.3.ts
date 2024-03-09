// Solicita ao usuário que digite o primeiro número E segundo número
let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");

// Converte as entradas do usuário para números
num1 = Number(num1);
num2 = Number(num2);

// A estrutura 'if' verifica se num1 é maior que num2
if (num1 > num2) {
  // Se a condição for verdadeira, imprime que num1 é o maior número
  console.log(`O maior número é ${num1}`);
} 
// A estrutura 'else if' verifica se num2 é maior que num1
else if (num2 > num1) {
  // Se a condição for verdadeira, imprime que num2 é o maior número
  console.log(`O maior número é ${num2}`);
} 
// A estrutura 'else' é executada se nenhuma das condições acima for verdadeira
else {
  // Imprime que os números são iguais
  console.log('Os números são iguais');
}


/*
Claro, aqui estão as explicações sem os códigos:

1. Inicialmente, solicitamos ao usuário que insira dois números. Esses números são armazenados 
como strings.

2. Em seguida, convertemos as strings para números. Isso é necessário porque as entradas do 
usuário são sempre retornadas como strings pelo método `prompt()`. Portanto, precisamos converter 
as strings para números para poder realizar operações matemáticas corretamente.

3. Usamos uma estrutura `if` para verificar se o primeiro número é maior que o segundo. Se essa 
condição for verdadeira, imprimimos que o primeiro número é o maior.

4. Em seguida, usamos uma estrutura `else if` para verificar se o segundo número é maior que o
primeiro. Se essa condição for verdadeira, imprimimos que o segundo número é o maior.

5. Finalmente, se nenhuma das condições acima for verdadeira (ou seja, se os dois números 
forem iguais), imprimimos que os números são iguais usando a estrutura `else`.
*/
