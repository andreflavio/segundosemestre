export function findMultiplesOfThreeDescending(): number[] {
    let i = 100;
    const multiples = [];

    while (i >= 0) {
        if (i % 3 === 0) {
            multiples.push(i);
        }
        i--;
    }

    return multiples;
}
