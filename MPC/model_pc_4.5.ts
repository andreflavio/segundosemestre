type Pair = [number, number];

export class Relacao {
    constructor() {}

    construir_pares(conjunto_A: number[], conjunto_B: number[], funcao_proposicional: (a: number, b: number) => boolean): { pares: Pair[] } {
        const pares: Pair[] = [];
        for (const a of conjunto_A) {
            for (const b of conjunto_B) {
                if (funcao_proposicional(a, b)) {
                    pares.push([a, b]);
                }
            }
        }
        return { pares };
    }
}
