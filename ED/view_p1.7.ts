import { createInterface } from 'readline';
import { getResponse } from './model_p1.7';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("Digite uma das opções a seguir:");
  console.log("Dúvidas");
  console.log("Reclamações");
  console.log("Sair");
}

function question() {
  rl.question('Digite sua escolha: ', (escolha: string) => { // Specify type as string
    const response = getResponse(escolha);
    console.log(response);
    if (escolha === "Sair") {
      rl.close();
    } else {
      question();
    }
  });
}

menu();
question();


// melhor código que consegui, tentei usar o sync e não consigui apareceu 
// erro não deixando digitar dúvida e reclamações. optei por redline

/*import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("Digite uma das opções a seguir:");
    console.log("Dúvidas");
    console.log("Reclamações");
    console.log("Sair");
}

function question() {
    rl.question('Digite sua escolha: ', (escolha) => {
        switch (escolha) {
            case "Dúvidas":
                console.log("Suas dúvidas devem ser encaminhadas para o email duvidas@email.com");
                question();
                break;
            case "Reclamações":
                console.log("Suas reclamações devem ser encaminhadas para o email reclamacoes@email.com");
                question();
                break;
            case "Sair":
                console.log("Obrigado por usar nosso serviço. Até mais!");
                rl.close();
                break;
            default:
                console.log("Opção inválida. Por favor, tente novamente.");
                question();
        }
    });
}

menu();
question();


*/
