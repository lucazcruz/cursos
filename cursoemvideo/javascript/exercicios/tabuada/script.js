document.querySelector('#gerar').addEventListener('click', function(){
    var n1 = document.querySelector('#numero').value
    var div2 = document.querySelector('#div2')
    div2.innerText= ""
    if(n1 == "") {
        alert('[ERROR] Campo Vazio')
    } else {
        n1 = parseInt(n1)
        for(var i = 1; i <= 10; i++) {
            var span = document.createElement('span')
            span.innerText= `${n1} x ${i} = ${n1*i}`
            div2.appendChild(span)
        }
    }
})