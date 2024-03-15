
// model.ts
export function compareNumbers(num1: number, num2: number): string {
  if (num1 > num2) {
    return `O maior número é ${num1}`;
  } else if (num2 > num1) {
    return `O maior número é ${num2}`;
  } else {
    return 'Os números são iguais';
  }
}
