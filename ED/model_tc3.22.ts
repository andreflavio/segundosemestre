// model_tc3.22.ts

export function insertionSortReversePass(arr: number[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        let key = arr[i];
        let j = i + 1;

        // Move elementos do vetor que são maiores que a chave para uma posição à frente
        while (j < arr.length && arr[j] < key) {
            arr[j - 1] = arr[j];
            j++;
        }

        // Coloca a chave na posição correta
        arr[j - 1] = key;

        // Mostra a posição do índice de comparação em ordem inversa
        console.log(`- Índice de comparação: ${i} (Valor: ${key})`);
        console.log(`- Vetor: [${arr.join(', ')}]`);
    }
}


/*
// Função para realizar uma "passagem reversa" do algoritmo de ordenação por inserção
function insertionSortReversePass(arr: number[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        let key = arr[i];
        let j = i + 1;

        // Move elementos do vetor que são maiores que a chave para uma posição à frente
        while (j < arr.length && arr[j] < key) {
            arr[j - 1] = arr[j];
            j++;
        }

        // Coloca a chave na posição correta
        arr[j - 1] = key;

        // Mostra a posição do índice de comparação em ordem inversa
        console.log(`- Índice de comparação: ${i} (Valor: ${key})`);
        console.log(`- Vetor: [${arr.join(', ')}]`);
    }
}

// Vetor inicial
const vetor: number[] = [0, 4, 3, 33, 22, -1, 4, 32, -3, -4, -9, 31, 5, 2];
console.log("Vetor inicial:", vetor);

// Executar a "passagem reversa" do algoritmo de ordenação por inserção
console.log("Executando passagens reversas:");
insertionSortReversePass([...vetor]);
*/