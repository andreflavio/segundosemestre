import { findMultiplesOfThreeDescending } from './model_p1.9';

// Obtém os múltiplos de 3 usando a função do modelo
const multiplesOfThree = findMultiplesOfThreeDescending();

// Imprime os múltiplos de 3 em ordem decrescente
console.log("Múltiplos de 3 entre 100 e 0 (inclusive):");
console.log(multiplesOfThree.join(", "));
