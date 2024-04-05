/*
function minhaFuncao(x: number) {
    x = 20; // Modifica o argumento x. Isso pode ser confuso porque não modifica a variável x fora da função.
    console.log(x); // Imprime 20. Isso é esperado porque estamos modificando e imprimindo o argumento x.
}

let x = 10;
minhaFuncao(x);
console.log(x); // Ainda imprime 10. Isso pode ser inesperado se você pensou que a função 
                 //minhaFuncao modificou a variável x passada como argumento.

*/

function minhaFuncao(x: number) {
  x = 20; // Modifica o argumento x. Isso pode ser confuso porque não modifica a variável x fora da função.
  console.log(x); // Imprime 20. Isso é esperado porque estamos modificando e imprimindo o argumento x.
}

let x = 10;
minhaFuncao(x);
console.log(x); // Ainda imprime 10. Isso pode ser inesperado se você pensou que a função minhaFuncao modificou a variável x passada como argumento.

/*
No primeiro código, temos duas variáveis x: uma global e uma local dentro da função minhaFuncao. 
A função minhaFuncao imprime o valor da variável local x, que é 20. Fora da função, quando 
imprimimos x, estamos referenciando a variável global x, que é 10.

No segundo código, temos apenas uma variável global x. Dentro da função minhaFuncao, estamos 
modificando o valor do argumento x, que é uma cópia do valor da variável global x. Portanto, 
a modificação do argumento x dentro da função não afeta o valor da variável global x. Assim, 
mesmo depois de chamar minhaFuncao(x), a variável global x ainda é 10.

A razão para mostrar ambos os códigos é ilustrar como o escopo das variáveis funciona em TypeScript
 e como isso pode levar a resultados inesperados se você não estiver ciente disso. Embora ambos os
  códigos produzam a mesma saída, eles representam dois conceitos diferentes: o escopo das variáveis 
  e a passagem de argumentos por valor. Espero que isso esclareça sua dúvida! Se você tiver mais
   perguntas, fique à vontade para perguntar.*/
