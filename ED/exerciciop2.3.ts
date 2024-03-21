class Factorial {
    private cache: Map<number, number>;

    constructor() {
        this.cache = new Map<number, number>();
    }

    factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        }

        if (this.cache.has(n)) {
            return this.cache.get(n)!;
        }

        const result = n * this.factorial(n - 1);
        this.cache.set(n, result);
        return result;
    }
}

function measureTime(fn: () => void): number {
    const start = process.hrtime();
    fn();
    const end = process.hrtime(start);
    return end[0] * 1000 + end[1] / 1000000;
}

const factorial = new Factorial();

// Defina o valor de 'n' para o qual você deseja calcular o fatorial
const n = 1000;

const repetitions = 100000; // número de vezes que a função será chamada para cada configuração
const resultsWithCache: number[] = [];
const resultsWithoutCache: number[] = [];

for (let i = 1; i <= repetitions; i++) {
    const timeWithCache = measureTime(() => {
        factorial.factorial(1000); // Aqui você pode ajustar 'n' para o valor desejado
    });
    resultsWithCache.push(timeWithCache);

    const timeWithoutCache = measureTime(() => {
        const factorialWithoutCache = new Factorial();
        factorialWithoutCache.factorial(1000); // Aqui você pode ajustar 'n' para o valor desejado
    });
    resultsWithoutCache.push(timeWithoutCache);
}

console.log("Tempo médio com cache:", resultsWithCache.reduce((a, b) => a + b, 0) / repetitions, "ms");
console.log("Tempo médio sem cache:", resultsWithoutCache.reduce((a, b) => a + b, 0) / repetitions, "ms");

// Código para gerar gráfico
import { plot } from 'nodeplotlib';

const xAxis = Array.from({ length: repetitions }, (_, i) => i + 1);
plot([
    { x: xAxis, y: resultsWithCache, name: 'Com Cache' },
    { x: xAxis, y: resultsWithoutCache, name: 'Sem Cache' }
]);



// npm install nodeplotlib