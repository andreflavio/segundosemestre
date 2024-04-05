// model.ts
function findMultiplesOfThree(): number[] {
    const multiples: number[] = [];

    // Itera de 0 a 100
    for (let i = 0; i <= 100; i++) {
        // Verifica se o número é múltiplo de 3
        if (i % 3 === 0) {
            multiples.push(i); // Adiciona o múltiplo de 3 ao array
        }
    }

    return multiples;
}

export { findMultiplesOfThree };


