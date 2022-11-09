document.getElementById('btn').addEventListener('click', click)


function click() {
    var ano = new Date().getFullYear()
    var anoNasc = Number(document.getElementById('anoNasc').value)
    var idade = ano - anoNasc
    var sexoM = document.getElementById('sexoM')
    var sexoF = document.getElementById('sexoF')
    var res = document.getElementById('res')

    document.getElementsByClassName('homem')[0].style.display='none'
    document.getElementsByClassName('velho')[0].style.display='none'
    document.getElementsByClassName('mulher')[0].style.display='none'
    document.getElementsByClassName('velha')[0].style.display='none'
    if (sexoM.checked) {
        res.innerHTML= `Detectamos um homem com <strong>${idade} anos</strong>`
        if (idade < 50) {
            document.getElementsByClassName('homem')[0].style.display='block'
        } else if (idade > ano) {
            alert('[ERROR] ano de nascimento inválido')
            res.innerHTML= `[ERROR] ano de nascimento inválido`
        } else if (idade >= 50) {
            document.getElementsByClassName('velho')[0].style.display='block'
        }
    } else if (sexoF.checked){
        res.innerHTML= `Detectamos um homem com <strong>${idade} anos</strong>`
        if (idade < 50) {
            document.getElementsByClassName('mulher')[0].style.display='block'
        } else if (idade > ano) {
            alert('[ERROR] ano de nascimento inválido')
            res.innerHTML= `[ERROR] ano de nascimento inválido`
        } else if (idade >= 50){
            document.getElementsByClassName('velha')[0].style.display='block'
        }
    }
}