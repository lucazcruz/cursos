// Ativar itens do menu
var links = document.querySelectorAll(".header-menu a")

links.forEach(ativado)
function ativado(link) {
    if (location.href.includes(link.href)) {
        link.classList.add("ativado")
    }
}

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search)

parametros.forEach(ativarProdutos)
function ativarProdutos(parametro) {
    var elemento  = document.getElementById(parametro)
    if (elemento) {
        elemento.checked = true
    }
}

// Ativar perguntas

const perguntas = document.querySelectorAll(".perguntas button")

perguntas.forEach(eventosPerguntas)
function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta)
}

function ativarPergunta(event) {
    var pergunta = event.currentTarget
    var resposta = document.getElementById(pergunta.getAttribute("aria-controls"))
    resposta.classList.toggle("ativa")
    pergunta.setAttribute("aria-expanded", resposta.classList.contains("ativa"))
}


// Galeria bicicletas

const galeriaImg = document.querySelectorAll(".bicicletas-img img")
const galeriaContainer =document.querySelector(".bicicletas-img")

galeriaImg.forEach(galeria)

function galeria(item) {
    item.addEventListener("click", imagem)
}
function imagem(event) {
    var img = event.currentTarget
    const media = matchMedia("(min-width: 920px)").matches

    if (media) {
        galeriaContainer.prepend(img)
    }
}