// model.ts

// Função que compara duas palavras e determina qual vem primeiro no dicionário
function compareWords(word1: string, word2: string): string {
    const minLength = Math.min(word1.length, word2.length);

    // Itera pelos caracteres de ambas as palavras até o comprimento mínimo
    for (let i = 0; i < minLength; i++) {
        // Compara os caracteres das palavras utilizando operadores relacionais
        // Se o caractere de word1 for menor que o caractere de word2,
        // significa que word1 vem antes de word2 no dicionário
        if (word1[i] < word2[i]) {
            return `${word1} vem antes de ${word2} no dicionário.`;
        } 
        // Se o caractere de word2 for menor que o caractere de word1,
        // significa que word2 vem antes de word1 no dicionário
        else if (word1[i] > word2[i]) {
            return `${word2} vem antes de ${word1} no dicionário.`;
        }
    }

    // Se os caracteres das palavras até o comprimento mínimo forem iguais,
    // a palavra com o menor comprimento vem primeiro no dicionário
    if (word1.length < word2.length) {
        return `${word1} vem antes de ${word2} no dicionário.`;
    } 
    // Se as palavras tiverem comprimentos diferentes e os caracteres até o
    // comprimento mínimo forem iguais, a palavra com o maior comprimento
    // vem primeiro no dicionário
    else if (word1.length > word2.length) {
        return `${word2} vem antes de ${word1} no dicionário.`;
    } 
    // Se as palavras tiverem o mesmo comprimento e todos os caracteres forem iguais,
    // as palavras são consideradas iguais
    else {
        return 'As palavras são iguais.';
    }
}

// Exporta a função compareWords para que possa ser utilizada em outros arquivos
export { compareWords };
