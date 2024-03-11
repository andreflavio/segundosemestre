let option = prompt("Digite a palavra correspondente à opção do menu: Dúvidas, Reclamações, Sair");

switch(option) {
    case 'Dúvidas':
        alert("Suas dúvidas devem ser encaminhadas para o email duvidas@email.com");
        break;
    case 'Reclamações':
        alert("Suas reclamações devem ser encaminhadas para o email reclamacoes@email.com");
        break;
    case 'Sair':
        alert("Você escolheu sair. Até logo!");
        break;
    default:
        alert("Opção inválida. Por favor, escolha uma opção válida.");
}
