var links = document.querySelectorAll("nav a")



links.forEach(ativarLink)
function ativarLink(item) {
    if (item.href === document.location.href) {
        item.style.background= "black";
        item.style.color = "white";
    }
}