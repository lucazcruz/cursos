var valor = [5, 8, 9, 4, 9, 1]
// valor.sort() // organiza os valores dentro do array em ordem crescente
/*
console.log(valor[0])
console.log(valor[1])
console.log(valor[2])
console.log(valor[3])
console.log(valor[4])
console.log(valor[5])

for (var i = 0; i < valor.length; i++) {
    console.log(valor[i])
} 
*/
for(var i in valor) {
    console.log(valor[i])
}

var busca = valor.indexOf(9) // retorna a posição de determinado valor dentro do array (se existir mais de um ele pega o primeiro que encontrar), se não encontrado retorna -1
if (busca != -1){
    console.log(`o valor se encontra na posição ${busca} do array` )
} {
    console.log(`o valor não foi encontrado` )
}
