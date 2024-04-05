export function findMultiplesOfThreeDescendingDoWhile(): number[] {
    let i = 100;
    const multiples = [];

    do {
        if (i % 3 === 0) {
            multiples.push(i);
        }
        i--;
    } while (i >= 0);

    return multiples;
}
