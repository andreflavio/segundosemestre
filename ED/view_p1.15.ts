// modelo_view.ts
import { str, num, strArray, numArray, pessoa, alteraValores } from './model_p1.15';

// Imprimindo os valores iniciais das variáveis
console.log(str); // Imprime: Olá, mundo!
console.log(num); // Imprime: 42
console.log(strArray); // Imprime: [ 'a', 'b', 'c' ]
console.log(numArray); // Imprime: [ 1, 2, 3 ]
console.log(pessoa); // Imprime: { nome: 'João', idade: 30 }

// Alterando os valores das variáveis
alteraValores("Mundo, olá!", 24, ["c", "b", "a"], [3, 2, 1], { nome: "Maria", idade: 25 });

// Imprimindo os valores das variáveis após a alteração
console.log(str); // Imprime: Mundo, olá!
console.log(num); // Imprime: 24
console.log(strArray); // Imprime: [ 'c', 'b', 'a' ]
console.log(numArray); // Imprime: [ 3, 2, 1 ]
console.log(pessoa); // Imprime: { nome: 'Maria', idade: 25 }

/*
Neste exemplo, o arquivo model_p1.15.ts define várias variáveis e uma função alteraValores que modifica 
essas variáveis. O arquivo modelo_view.ts importa essas variáveis e a função do arquivo modelo.ts, 
imprime os valores das variáveis, chama a função alteraValores para modificar os valores das variáveis
 e, em seguida, imprime os valores das variáveis novamente.

A conclusão aqui é que as variáveis exportadas de um módulo em TypeScript são passadas por referência. 
Portanto, quando a função alteraValores modifica as variáveis no arquivo modelo.ts, essas modificações 
são refletidas no arquivo modelo_view.ts. Isso é diferente de linguagens como C e C++, onde as variáveis 
são passadas por valor por padrão, e as modificações em uma função não afetam o valor da variável fora
 da função. Isso também destaca a importância de entender como os valores são passados em diferentes
  linguagens de programação.
*/
