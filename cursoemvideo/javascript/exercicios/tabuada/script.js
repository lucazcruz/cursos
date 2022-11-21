document.querySelector('#gerar').addEventListener('click', function(){
    var n1 = document.querySelector('#numero').value
    var div2 = document.querySelector('#div2')
    div2.innerText= ""
    if(n1 == "") {
        alert('[ERROR] Campo Vazio')
    } else {
        for(var n2 = 1; n2 <= 10; n2++) {
            var span = document.createElement('span')
            var soma = n1 * n2
            span.innerText= `${n1} x ${n2} = ${soma}`
            div2.appendChild(span)
        }
    }
})