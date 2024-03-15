// main.ts
import { GeometricProgression } from './GeometricProgression';

const gp = new GeometricProgression(1, 2); // Cria uma progressão geométrica com o primeiro termo 1 e a razão 2
const terms = gp.generateTerms(50); // Gera os primeiros 50 termos

console.log(terms);
