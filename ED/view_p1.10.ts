import { findMultiplesOfThreeDescendingDoWhile } from './model_p1.10';

// Obtém os múltiplos de 3 usando a função do modelo
const multiplesOfThree = findMultiplesOfThreeDescendingDoWhile();

// Imprime os múltiplos de 3 em ordem decrescente
console.log("Múltiplos de 3 entre 100 e 0 (inclusive):");
console.log(multiplesOfThree.join(", "));
