// GeometricProgression.ts

// Definindo a classe GeometricProgression
export class GeometricProgression {
    private firstTerm: number; // O primeiro termo da progressão geométrica
    private ratio: number; // A razão da progressão geométrica
    private terms: number[]; // Array para armazenar os termos da progressão

    // Construtor da classe que inicializa o primeiro termo, a razão e o array de termos
    constructor(firstTerm: number, ratio: number) {
        this.firstTerm = firstTerm;
        this.ratio = ratio;
        this.terms = [firstTerm];
    }

    // Método para gerar 'n' termos da progressão geométrica
    generateTerms(n: number): number[] {
        for(let i = 1; i < n; i++) {
            const nextTerm = this.terms[i - 1] * this.ratio; // Calcula o próximo termo
            this.terms.push(nextTerm); // Adiciona o próximo termo ao array de termos
        }
        return this.terms; // Retorna o array de termos
    }
}
