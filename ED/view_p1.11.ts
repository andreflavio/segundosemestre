import { Model } from './model_p1.11';

class View {
  private readonly promptSync: any;

  constructor() {
    this.promptSync = require('prompt-sync')({sigint: true});
  }

  obterNumeros(): [number, number] {
    const n1 = Number(this.promptSync('Digite o primeiro número (n1): '));
    const n2 = Number(this.promptSync('Digite o segundo número (n2): '));
    return [n1, n2];
  }

  exibirComparacao(comparacao: string): void {
    console.log(comparacao);
  }
}

const view = new View();
const numeros = view.obterNumeros();
const model = new Model(numeros[0], numeros[1]);
const comparacao = model.getComparacao();
view.exibirComparacao(comparacao);


// EXERCÍCIO INCOMPLETO