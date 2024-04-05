// model.ts
function compareLetters(letter1: string, letter2: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    const index1 = alphabet.indexOf(letter1.toLowerCase());
    const index2 = alphabet.indexOf(letter2.toLowerCase());
  
    if (index1 === -1 || index2 === -1) {
      return 'Uma ou ambas as letras não são válidas.';
    }
  
    if (index1 < index2) {
      return `${letter1} vem antes de ${letter2} no alfabeto.`;
    } else if (index1 > index2) {
      return `${letter2} vem antes de ${letter1} no alfabeto.`;
    } else {
      return 'As letras são iguais.';
    }
  }
  
  export { compareLetters };
  
 