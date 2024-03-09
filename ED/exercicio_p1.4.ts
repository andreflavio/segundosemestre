// TEM QUE USAR O NAVEGADOR PARA RODAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Solicita ao usuário que digite duas letras

let letra1 = prompt("Digite a primeira letra: ");
let letra2 = prompt("Digite a segunda letra: ");

// Compara as letras e imprime qual vem antes e qual vem depois no alfabeto

if (letra1 < letra2) {
  console.log(`${letra1} vem antes de ${letra2} no alfabeto.`);
} else if (letra1 > letra2) {
  console.log(`${letra2} vem antes de ${letra1} no alfabeto.`);
} else {
  console.log('As letras são iguais.');
}
