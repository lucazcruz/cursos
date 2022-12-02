function book(nome, ano, autor) {
    return {
        frase: nome + ' por ' + autor,
        nome: nome.toUpperCase(),
        totalAnos: 2022 - ano,
        } 
}
var objectReturn = book('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')

console.log(objectReturn.frase)

