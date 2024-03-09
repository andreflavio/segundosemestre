// Solicita ao usuário para digitar a primeira palavra
let palavra1 = prompt("Digite a primeira palavra: ");

// Solicita ao usuário para digitar a segunda palavra
let palavra2 = prompt("Digite a segunda palavra: ");

// Verifica se a primeira palavra é lexicograficamente menor que a segunda palavra
// O operador relacional '<' está sendo usado aqui
if (palavra1 < palavra2) {
    // Se verdadeiro, imprime que a primeira palavra aparece antes da segunda no dicionário
    console.log(`${palavra1} aparece antes de ${palavra2} no dicionário.`);
} 
// Verifica se a primeira palavra é lexicograficamente maior que a segunda palavra
// O operador relacional '>' está sendo usado aqui
else if (palavra1 > palavra2) {
    // Se verdadeiro, imprime que a segunda palavra aparece antes da primeira no dicionário
    console.log(`${palavra2} aparece antes de ${palavra1} no dicionário.`);
} 
else {
    // Se as palavras são iguais, imprime que as palavras são idênticas
    console.log('As duas palavras são idênticas.');
}
