// Desafio: Soma de Números

// Escreva uma função em JavaScript chamada somaNumeros que recebe um array de números como parâmetro e retorna a soma de todos os números no array.

// Por exemplo:

//     Para o array [1, 2, 3, 4, 5], a função deve retornar 15 (pois 1 + 2 + 3 + 4 + 5 = 15).
//     Para o array [10, 20, 30], a função deve retornar 60 (pois 10 + 20 + 30 = 60).

var arr = [1, 2, 3, 4, 5];
var somaNumeros = 0;
for(var i = 0; i < arr.length; i++){
  
  somaNumeros += arr[i];
};

console.log(somaNumeros);
