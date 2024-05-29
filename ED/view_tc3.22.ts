// view_tc3.22.ts

import { insertionSortReversePass } from './model_tc3.22';

// Vetor inicial
const vetor: number[] = [0, 4, 3, 33, 22, -1, 4, 32, -3, -4, -9, 31, 5, 2];
console.log("Vetor inicial:", vetor);

// Executar a "passagem reversa" do algoritmo de ordenação por inserção
console.log("Executando passagens reversas:");
insertionSortReversePass([...vetor]);
