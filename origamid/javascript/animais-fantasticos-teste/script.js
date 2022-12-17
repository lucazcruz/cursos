tabmenuInit() 
accordionInit()
smoothScrollInit()
animaScrollInit()

function tabmenuInit() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li')
    const sections = document.querySelectorAll('.js-tabcontent section')

    if(tabmenu.length && sections.length) {
        sections[0].classList.add('ativo')
        tabmenu.forEach( (item, index) => {
            item.addEventListener('click', () => {
                ativar(index)        
            })
        })

        function ativar(index) {
            sections.forEach(item => {
                item.classList.remove('ativo')
            })
            sections[index].classList.add('ativo')
        }
    }
}

function accordionInit() {
    const dt = document.querySelectorAll('.js-accordion dt')
    dt.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target)
            e.target.classList.toggle('ativo')
            e.target.nextElementSibling.classList.toggle('ativo')
        })
    })

}

function smoothScrollInit() {
    const links = document.querySelectorAll('.js-menu a[href^="#"]')
    if(links.length) {
        links.forEach(item => {
            item.addEventListener('click', scroll)
        })
        function scroll(e) {
            e.preventDefault()
            const href = e.target.getAttribute('href')
            const section = document.querySelector(href)
            section.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
}

function animaScrollInit() {
    const sections = document.querySelectorAll('.js-scroll')
    const windowHeight = window.innerHeight * 0.6
    sections[0].classList.add('ativo')

    sections.forEach(item => {
        window.addEventListener('scroll', () => {
            anima(item)
        })
    })

    function anima(item){
        const top = item.getBoundingClientRect().top
        const animar = (top - windowHeight) < 0
        if (animar) {
            item.classList.add('ativo')
        } else {
            item.classList.remove('ativo')
        }
    }
}