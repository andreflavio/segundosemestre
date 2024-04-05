// modelo.ts

// Definindo uma variável do tipo string
export let str: string = "Olá, mundo!";

// Definindo uma variável do tipo number
export let num: number = 42;

// Definindo uma variável do tipo array de strings
export let strArray: string[] = ["a", "b", "c"];

// Definindo uma variável do tipo array de numbers
export let numArray: number[] = [1, 2, 3];

// Definindo um objeto que modela uma pessoa
export let pessoa = { nome: "João", idade: 30 };

// Função que altera os valores das variáveis
export function alteraValores(s: string, n: number, sa: string[], na: number[], p: { nome: string; idade: number }) {
    str = s;
    num = n;
    strArray = sa;
    numArray = na;
    pessoa = p;
}
