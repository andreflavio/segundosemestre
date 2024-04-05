// modelo.ts
export let str: string = "Olá, mundo!";
export let num: number = 42;
export let strArray: string[] = ["a", "b", "c"];
export let numArray: number[] = [1, 2, 3];
export let pessoa = { nome: "João", idade: 30 };

export function alteraValores(s: string, n: number, sa: string[], na: number[], p: { nome: string; idade: number }) {
    str = s;
    num = n;
    strArray = sa;
    numArray = na;
    pessoa = p;
}
