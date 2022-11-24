document.querySelector('#contar').addEventListener('click', clicou)
    function clicou() {
        var start = document.querySelector('#inicio').value
        var end = document.querySelector('#fim').value
        var step = document.querySelector('#passos').value
        var div2 = document.querySelector('#div2')
        div2.innerHTML = ""
        if (start == "" || end == "") {
            alert('[Error] Preencha o(s) Campo(s) Vazio(s)')
        } else {
            start = parseInt(start)
            end = parseInt(end)
            step = parseInt(step)
            if (start < end) { 
                div2.innerHTML= `<p>Contagm Crescente</p>`
                for(var i = start; i <= end; i+=step){
                    div2.innerHTML+= `<span>${i} \u279C </span>`
                }
                div2.innerHTML += ` <img src="icon/flag.png" width="20">`
            }
            if (start > end) {
                div2.innerHTML= `<p>Contagm Decrescente</p>`
                for(var i = start; i >= end; i-=step){
                    div2.innerHTML += `<span>${i} \u279C </span>`
                }
                div2.innerHTML += ` <img src="icon/flag.png" width="20">`
            }
        }
        document.getElementById('inicio').focus()
    }