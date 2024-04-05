export class Model {
    private n1: number;
    private n2: number;
  
    constructor(n1: number, n2: number) {
      this.n1 = n1;
      this.n2 = n2;
    }
  
    getComparacao(): string {
      if (this.n1 < this.n2) {
        return 'n1 é menor que n2';
      } else if (this.n1 > this.n2) {
        return 'n1 é maior que n2';
      } else {
        return 'n1 é igual a n2';
      }
    }
  }
  