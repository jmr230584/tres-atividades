let teclado = require (`prompt-sync`)();
let total_pessoas: number = 0;
let cont_condicao_pessoas: number = 0;

do{
    let idade: number = 0;
    let salario: number = 0;
    
    idade = parseInt(teclado(`Qual a idade: `));
    salario = parseInt(teclado(`Qual o salario: `));

    if (idade < 30 && salario > 3000){
        cont_condicao_pessoas++;
        total_pessoas++;
    }
    else{
        total_pessoas++;
    }
}while(total_pessoas <= 50);

console.log(`O total de pessoas que atendem a cndição de ser menor que 30 anos e ganhar mais de R$3.000,00 é ${cont_condicao_pessoas}`)