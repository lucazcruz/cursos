document.getElementById('btn').addEventListener('click', click)

function click() {
    var ano = new Date().getFullYear()
    var anoNasc = Number(document.getElementById('anoNasc').value)
    var idade = ano - anoNasc
    var sexoM = document.getElementById('sexoM')
    var sexoF = document.getElementById('sexoF')
    var res = document.getElementById('res')
    var imagem = document.getElementById('imagem')

    if (sexoM.checked) {
        imagem.style.display='block'
        res.innerHTML= `Detectando homem de <strong>${idade}</strong> anos`
        if (idade < 1 || idade > ano - 1) {
            alert('[ERROR] Ano de Nascimento Inválido')
            res.innerHTML= `Ano de Nascimento Inválido`
            imagem.style.display='none'
        } else if (idade <= 10) {
            imagem.src="img/menino.jpg"
        } else if (idade <= 22) {
            imagem.src="img/homem-jovem.jpg"
        } else if (idade <= 50) {
            imagem.src="img/homem.jpg"
        } else if (idade < ano) {
            imagem.src="img/senhor.jpg"
        }

    } else if (sexoF.checked) {
        imagem.style.display='block'
        res.innerHTML= `Detectando mulher de <strong>${idade}</strong> anos`
        if (idade < 1 || idade > ano - 1) {
            alert('[ERROR] Ano de Nascimento Inválido')
            res.innerHTML= `Ano de Nascimento Inválido`
            imagem.style.display='none'
        } else if (idade <= 10) {
            imagem.src="img/menina.jpg"
        } else if (idade <= 22) {
            imagem.src="img/mulher-jovem.jpg"
        } else if (idade <= 50) {
            imagem.src="img/mulher.jpg"
        } else if (idade < ano) {
            imagem.src="img/senhora.jpg"
        }
    }
}