document.querySelector('#verificar').addEventListener('click', verificar)
function verificar() {
    var anoAtual = new Date().getFullYear()
    var anoNasc = document.getElementById('anoNasc').value
    var idade = anoAtual - anoNasc
    var res = document.getElementById('res')
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')

    if (anoNasc <= 0 || anoNasc > anoAtual) {
        alert('[ERROR] Ano de Nascimento Inválido')
    } else {
        if (mas.checked) {
            if (idade <= 10) {
                imagem.setAttribute('src', 'img/menino.jpg')
            } else if (idade <= 25) {
                imagem.setAttribute('src', 'img/homem-jovem.jpg')
            } else if (idade <= 45) {
                imagem.setAttribute('src', 'img/homem.jpg')
            } else {
                imagem.setAttribute('src', 'img/senhor.jpg')
            }
            res.innerHTML=`<p>Homem de ${idade} anos</p>`
        } 
        if (fem.checked) {
            if (idade <= 10) {
                imagem.setAttribute('src', 'img/menina.jpg')
            } else if (idade <= 25) {
                imagem.setAttribute('src', 'img/mulher-jovem.jpg')
            } else if (idade <= 45) {
                imagem.setAttribute('src', 'img/mulher.jpg')
            } else {
                imagem.setAttribute('src', 'img/senhora.jpg')                
            }
            res.innerHTML=`<p>Mulher de ${idade} anos</p>`
        }
        res.appendChild(imagem)
    }
}