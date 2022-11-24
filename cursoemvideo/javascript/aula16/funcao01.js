// 1º Função
console.log('1° função retorna se um numero é Par ou Ímpar')
function parImpar(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
var resultado = parImpar(1)

console.log(resultado)

// 2º Função
console.log('2° função retorna a soma entre dois numeros')
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(8, 2))

// 3º Função
console.log('3° função em variáveis')
var f = function(n1){
    return n1 * 2
}
console.log(f(2))

// 4º Função
console.log('3° função fatórial do numero x') // 5! = 5*4*3*2*1 = 120
 function fatorial(x){
    var n1 = 1
    for( var i = 1; i <= x; i++) {
        n1 = n1 * i
    }
    return n1
}
console.log(fatorial(5))