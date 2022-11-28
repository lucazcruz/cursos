document.querySelector('#adicionar').addEventListener('click', adicionar)
document.querySelector('#finalizar').addEventListener('click', finalizar)

var num = []
var input = document.querySelector('#numero')
var div2 = document.querySelector('#div2')
var div3 = document.querySelector('#div3')

function adicionar(){
    div3.innerHTML= ""
    if (input.value < 1 || input.value > 100) {
        alert('[ERROR] Número inválido')
    } else {
        if (num.indexOf(input.value) == -1) {
        num.push(input.value)
        div2.innerHTML += div2.innerHTML= `<span>valor ${input.value} adicionado</span>`
        } else {
            alert('[ERROR] Número já adicionado')
        }
    }
    input.value = ""
    input.focus() 
}
function finalizar(){
    num.sort(sortfunction)  // Colocar o array em ordem crescente 
    div3.innerHTML= `<span>Ao todo temos ${num.length} números cadastrados</span>`
    div3.innerHTML += div3.innerHTML= `<span>O maior valor informado foi ${num[num.length-1]}</span>`
    div3.innerHTML += div3.innerHTML= `<span>O menor valor informado foi ${num[0]}</span>`
    console.log(num)
    // Transformando os valores do array em numeros
    var arrayNumber = num.map(Number)
    var total = 0
    for(var i = arrayNumber.length-1; i >= 0 ; i--) {
        total += arrayNumber[i]
    } 
    div3.innerHTML += div3.innerHTML= `<span>Somando todos os valores temos ${total}</span>`
    div3.innerHTML += div3.innerHTML= `<span>A media dos valores informados é ${total/num.length}</span>`
}
//faz com que o array seja ordenado numericamente e de ordem crescente.
function sortfunction(a, b){
    return (a - b) 
}