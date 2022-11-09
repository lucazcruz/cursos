// var hora = new Date().getHours()
// document.querySelector('.now').innerText= `Agora são ${hora} horas`

// if (hora < 12) {
//     document.getElementsByClassName('img')[0].style.display='block'
//     document.body.style.background= 'lightblue'
// } else if (hora < 17) {
//     document.getElementsByClassName('img')[1].style.display='block'
//     document.body.style.background= 'rgb(238, 226, 162)'
// } else if (hora < 19) {
//     document.getElementsByClassName('img')[2].style.display='block'
//     document.body.style.background= 'lightsalmon'
// } else {
//     document.getElementsByClassName('img')[3].style.display='block'
//     document.body.style.background= '#424242'
//     document.body.style.color= '#fff'
// }

function carregar() {
    var hora = new Date().getHours()
    var imagem = document.getElementById('imagem')
    document.getElementById('msg').innerText= `Agora são ${hora} horas`

    if (hora < 12) {
        imagem.src="img/1.jpg"
        document.body.style.background= 'lightblue'
    } else if (hora < 18) {
        imagem.src="img/2.jpg"
        document.body.style.background= 'rgb(238, 226, 162)'
    } else if (hora < 19) {
        imagem.src="img/3.jpg"
        document.body.style.background= 'lightsalmon'
    } else {
        imagem.src="img/4.jpg"
        document.body.style.background= '#424242'
        document.body.style.color= '#fff'
    }
}