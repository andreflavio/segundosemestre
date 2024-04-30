import { Relacao } from './model_pc_4.5';

function funcao_proposicional(a: number, b: number): boolean {
    return a + b === 5;
}

const conjunto_A: number[] = [1, 2, 3];
const conjunto_B: number[] = [4, 5, 6];

const relacao = new Relacao();
const resultado = relacao.construir_pares(conjunto_A, conjunto_B, funcao_proposicional);
console.log(resultado);
