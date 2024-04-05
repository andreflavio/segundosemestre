// view.ts
import { findMultiplesOfThree } from './model_p1.8';

// Obtém os múltiplos de 3 usando a função do modelo
const multiplesOfThree = findMultiplesOfThree();

// Imprime os múltiplos de 3 em ordem crescente
console.log("Múltiplos de 3 entre 0 e 100 (inclusive):");
console.log(multiplesOfThree.join(", "));

