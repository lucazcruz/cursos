var hora = new Date().getHours()
document.querySelector('.now').innerText= `Agora são ${hora} horas`

if (hora < 12) {
    document.getElementsByClassName('img')[0].style.display='block'
    document.body.style.background= 'lightblue'
} else if (hora < 17) {
    document.getElementsByClassName('img')[1].style.display='block'
    document.body.style.background= 'rgb(238, 226, 162)'
} else if (hora < 19) {
    document.getElementsByClassName('img')[2].style.display='block'
    document.body.style.background= 'lightsalmon'
} else {
    document.getElementsByClassName('img')[3].style.display='block'
    document.body.style.background= '#424242'
    document.body.style.color= '#fff'
}