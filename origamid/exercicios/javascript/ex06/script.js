var imgs = document.querySelectorAll("ul img")
var imgMain = document.querySelector("#imgMain")

imgs.forEach(img)
function img(item) {
    item.addEventListener('click', function(){
        imgMain.src = item.src
        imgMain.alt = item.alt
    })
}