export function getResponse(escolha: string): string {
  switch (escolha) {
      case "Dúvidas":
          return "Suas dúvidas devem ser encaminhadas para o email duvidas@email.com";
      case "Reclamações":
          return "Suas reclamações devem ser encaminhadas para o email reclamacoes@email.com";
      case "Sair":
          return "Obrigado por usar nosso serviço. Até mais!";
      default:
          return "Opção inválida. Por favor, tente novamente.";
  }
}
