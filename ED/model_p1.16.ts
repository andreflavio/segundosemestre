import { createInterface } from 'readline';

// Criando uma interface readline para lidar com a entrada e saída padrão
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para exibir o menu de opções
export function menu() {
  console.log("Menu de Opções:");
  console.log("1 - Criar um cadastro");
  console.log("2 - Excluir um cadastro");
  console.log("3 - Atualizar um cadastro");
  console.log("4 - Listar cadastros");
}

// Função para solicitar ao usuário que selecione uma opção
export function selectOption(callback: (option: string) => void) {
  rl.question('Selecione uma opção: ', (option: string) => {
    callback(option);
    rl.close();  // Fechando a interface readline
  });
}



/*
PSEUDOCÓDIGO

INÍCIO
    ESCREVA "Menu de opções:"
    ESCREVA "1 – Criar um cadastro"
    ESCREVA "2 – Excluir um Cadastro"
    ESCREVA "3 – Atualizar um Cadastro"
    ESCREVA "4 – Listar Cadastros"
    ESCREVA "Escolha uma opção:"
    LEIA opcao
    SELECIONE opcao
        CASO 1:
            ESCREVA "Você selecionou: Criar um cadastro"
        CASO 2:
            ESCREVA "Você selecionou: Excluir um Cadastro"
        CASO 3:
            ESCREVA "Você selecionou: Atualizar um Cadastro"
        CASO 4:
            ESCREVA "Você selecionou: Listar Cadastros"
        CASO CONTRÁRIO:
            ESCREVA "Opção inválida"
    FIM SELECIONE
FIM

*/
