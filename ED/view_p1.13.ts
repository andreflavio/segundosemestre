import { Usuario } from './model_p1.13';

const promptSync = require('prompt-sync')({sigint: true});

const nome1 = promptSync('Digite o nome do primeiro usuário: ');
const anoNascimento1 = Number(promptSync('Digite o ano de nascimento do primeiro usuário: '));
const cpf1 = promptSync('Digite o CPF do primeiro usuário: ');
const genero1 = promptSync('Digite o gênero do primeiro usuário: ');

const nome2 = promptSync('Digite o nome do segundo usuário: ');
const anoNascimento2 = Number(promptSync('Digite o ano de nascimento do segundo usuário: '));
const cpf2 = promptSync('Digite o CPF do segundo usuário: ');
const genero2 = promptSync('Digite o gênero do segundo usuário: ');

const usuario1 = new Usuario(nome1, anoNascimento1, cpf1, genero1);
const usuario2 = new Usuario(nome2, anoNascimento2, cpf2, genero2);

console.log(`Os usuários são iguais? ${usuario1.equals(usuario2)}`);

