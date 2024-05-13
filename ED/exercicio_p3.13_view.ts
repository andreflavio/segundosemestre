import Table from 'cli-table';
import { bubbleSort, optimizedBubbleSort, generateReversedArray, measureSortingTime } from './exercicio_p3.13_model';

// Tamanhos dos vetores
const sizes = [100, 1000, 10000];

// Criar uma nova tabela
const table = new Table({
    head: ['Tamanho do Vetor', 'Bubble Sort Não Otimizado', 'Bubble Sort Otimizado']
});

// Executar para cada tamanho de vetor
sizes.forEach(size => {
    const reversedArray = generateReversedArray(size);
    const nonOptimizedTimeReversed = measureSortingTime(bubbleSort, reversedArray.slice());
    const optimizedTimeReversed = measureSortingTime(optimizedBubbleSort, reversedArray.slice());

    // Adicionar os resultados à tabela
    table.push([
        size.toString(),
        nonOptimizedTimeReversed.toFixed(2) + " ms",
        optimizedTimeReversed.toFixed(2) + " ms"
    ]);
});

// Imprimir a tabela
console.log(table.toString());
