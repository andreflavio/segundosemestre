import * as fs from 'fs';
import * as readline from 'readline';

// Função para ler o arquivo e armazenar as palavras em um vetor
export async function lerArquivo(filePath: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const palavras: string[] = [];
        const rl = readline.createInterface({
            input: fs.createReadStream(filePath),
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            // Dividir o conteúdo em palavras separadas por espaços, hífens ou pontuação e adicionar ao vetor
            const palavrasLinha = line.split(/[^\w-]+/).filter(palavra => palavra !== "");
            palavras.push(...palavrasLinha);
        });

        rl.on('close', () => {
            resolve(palavras);
        });

        rl.on('error', (error) => {
            reject(error);
        });
    });
}


// Função para realizar a busca binária
export function buscaBinaria(palavras: string[], palavraBuscada: string): { posicao: number, passos: number } {
    let inicio = 0;
    let fim = palavras.length - 1;
    let passos = 0;

    while (inicio <= fim) {
        passos++;
        const meio = Math.floor((inicio + fim) / 2);
        const comparacao = palavras[meio].localeCompare(palavraBuscada, undefined, { sensitivity: 'base' });

        if (comparacao === 0) {
            return { posicao: meio, passos };
        } else if (comparacao < 0) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return { posicao: -1, passos };
}

/*
import * as fs from 'fs';
import * as readline from 'readline';

// Função para ler o arquivo e armazenar as palavras em um vetor
async function lerArquivo(filePath: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const palavras: string[] = [];
        const rl = readline.createInterface({
            input: fs.createReadStream(filePath),
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            // Dividir o conteúdo em palavras separadas por espaços ou pontuação e adicionar ao vetor
            const palavrasLinha = line.split(/\W+/).filter(palavra => palavra !== "");
            palavras.push(...palavrasLinha);
        });

        rl.on('close', () => {
            resolve(palavras);
        });

        rl.on('error', (error) => {
            reject(error);
        });
    });
}

// Função para realizar a busca binária
function buscaBinaria(palavras: string[], palavraBuscada: string): { posicao: number, passos: number } {
    let inicio = 0;
    let fim = palavras.length - 1;
    let passos = 0;

    while (inicio <= fim) {
        passos++;
        const meio = Math.floor((inicio + fim) / 2);
        const comparacao = palavras[meio].localeCompare(palavraBuscada, undefined, { sensitivity: 'base' });

        // Imprimir a posição atual e a palavra sendo comparada
        console.log(`Passo ${passos}: comparando "${palavraBuscada}" com "${palavras[meio]}" na posição ${meio}`);

        if (comparacao === 0) {
            return { posicao: meio, passos };
        } else if (comparacao < 0) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return { posicao: -1, passos };
}

// Função principal para executar o programa
async function main() {
    const filePath = './palavras.txt';  // Caminho do arquivo de texto com palavras em ordem alfabética
    let palavras = await lerArquivo(filePath);
    
    // Ordenar palavras em ordem alfabética
    palavras = palavras.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite a palavra a ser buscada: ', (palavraBuscada) => {
        // Contar o número de ocorrências da palavra buscada
        const numOcorrencias = palavras.filter(palavra => palavra.localeCompare(palavraBuscada, undefined, { sensitivity: 'base' }) === 0).length;

        const resultado = buscaBinaria(palavras, palavraBuscada);
        if (resultado.posicao !== -1) {
            console.log(`A palavra "${palavraBuscada}" foi encontrada na posição ${resultado.posicao}.`);
        } else {
            console.log(`A palavra "${palavraBuscada}" não foi encontrada no vetor.`);
        }
        console.log(`Número de passos de comparação: ${resultado.passos}`);
        console.log(`Número de ocorrências da palavra "${palavraBuscada}": ${numOcorrencias}`);
        rl.close();
    });
}

// Executar o programa
main().catch(error => console.error('Erro ao executar o programa:', error));
*/