// Importando o módulo 'readline' para lidar com a entrada do usuário
import readline from 'readline';

// Criando uma interface readline para lidar com a entrada e saída padrão
const rl = readline.createInterface({
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
// Esta função recebe uma função de callback que será chamada quando o usuário inserir uma opção
export function selectOption(callback: (option: string) => void) {
    rl.question('Selecione uma opção: ', (option) => {
        callback(option);
        rl.close();  // Fechando a interface readline
    });
}

// Exibindo o menu de opções
menu();

// Solicitando ao usuário que selecione uma opção
// A função de callback será chamada quando o usuário inserir uma opção
selectOption((option: string) => {
    // Dependendo da opção escolhida pelo usuário, uma mensagem diferente será exibida
    switch(option) {
        case '1':
            console.log("Você selecionou: Criar um cadastro");
            break;
        case '2':
            console.log("Você selecionou: Excluir um cadastro");
            break;
        case '3':
            console.log("Você selecionou: Atualizar um cadastro");
            break;
        case '4':
            console.log("Você selecionou: Listar cadastros");
            break;
        default:
            console.log("Opção inválida");
    }
});
