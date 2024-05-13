// Algoritmo de ordenação da bolha não otimizado
export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca os elementos
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Algoritmo de ordenação da bolha otimizado
export function optimizedBubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca os elementos
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Função para gerar um vetor com elementos em ordem reversa
export function generateReversedArray(size: number): number[] {
    const arr: number[] = [];
    for (let i: number = size; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}

// Função para medir o tempo de ordenação de um vetor utilizando um algoritmo de ordenação
export function measureSortingTime(sortingFunction: Function, arr: number[]): number {
    const start = performance.now();
    sortingFunction(arr);
    const end = performance.now();
    return end - start;
}
