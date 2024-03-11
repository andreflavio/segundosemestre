// PRIMEIRA PARTE DO EXERCÍCIO

let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

if(n1 > n2) {
    console.log("n1 é maior do que n2");
} else if(n1 < n2) {
    console.log("n1 é menor do que n2");
} else {
    console.log("n1 é igual a n2");
}


// SEGUNDA PARTE DO EXERCÍCIO 


let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

// Determina a relação entre n1 e n2
let relation;
if (n1 < n2) {
    relation = "menor";
} else if (n1 > n2) {
    relation = "maior";
} else {
    relation = "igual";
}

// Usa 'switch' para imprimir a mensagem apropriada
switch (relation) {
    case "menor":
        console.log("n1 é menor do que n2");
        break;
    case "maior":
        console.log("n1 é maior do que n2");
        break;
    case "igual":
        console.log("n1 é igual a n2");
        break;
}









/*
A dificuldade em discriminar três condições (>, < ou =) surge principalmente quando se tenta usar a 
instrução `switch` em TypeScript (ou JavaScript). A instrução `switch` é projetada para comparação de 
igualdade estrita (`===`), o que significa que não suporta diretamente comparações como maior que, menor 
que ou igual a.

No caso do bloco `if-else`, não há dificuldade em discriminar essas três condições. Você pode facilmente
 verificar se um número é maior que, menor que ou igual a outro número usando 
 os operadores `>`, `<` e `==` ou `===`.

Portanto, se você quiser discriminar as três condições (>, < ou =), o bloco `if-else` é 
mais adequado. O bloco `switch` é mais útil quando você tem muitos casos possíveis que dependem do 
valor de uma única variável, e todos os casos são valores únicos, não intervalos ou condições complexas. 
Espero que isso esclareça sua dúvida! Se você tiver mais perguntas, sinta-se à vontade para perguntar.
*/