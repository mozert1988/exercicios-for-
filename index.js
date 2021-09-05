//01. Crie um array que tenha nomes de 7 pessoas e mostre no console o nome de
//cada pessoa, uma de cada vez.


let lista = ["Mozart", "Fatinha", "Franciele", "Victor","Galo", "Pedro", "Gustavo"];
let count = 0;

for (let percorre of lista){
  console.log(`o elemento ${count} è:  ${percorre}`);
  count = count + 1;
}

// 02. Crie um array que tenha 7 números e mostre no console cada número somado de
// +1.
let listaNumeros = [1,2,3,4,5,6,7,]

for(let percorre of listaNumeros){
  count = count + 1;
  console.log(count);
  }

// 03. Crie uma string e mostre no console ela letra por letra.


// desafio. Crie um script que pergunte 3 números ao usuário, coloque em um array,
// depois exiba tal array.
// Modifique os elementos do array de modo a a sequência de números ficar do
// contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1




//Exercicio feito de uma forma diferente, colocando no console log para somar mais 1
console.log("teste com exercicio resolvido:")

let lista1 = [1,2,3,4,5,6,7];
for(let item of lista1){
  console.log(item + 1);
}