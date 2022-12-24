smoothScrollInit()
tabMenuInit()
accordingInit()
animationInit()

function smoothScrollInit() {
    const linksInterno = document.querySelectorAll('.header-menu a[href^="#"]');
    linksInterno.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            smoothScroll(e)
        })
    })
    function smoothScroll(e) {
        const href = e.target.getAttribute('href')
        const section =document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth'
        })
    }
}

function tabMenuInit() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    tabContent[0].classList.add('ativo')
    tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            ativar(index)
        })
    })
    function ativar(index) {
        tabContent.forEach( (item) => {
            item.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo')
    }
}

function accordingInit() {
    const dt = document.querySelectorAll('.faq dl dt')
    dt.forEach(item => {
        item.addEventListener('click', (e) => {
            ativar(e)
        })
    })
    function ativar(e) {
        e.target.classList.toggle('ativo')
        e.target.nextElementSibling.classList.toggle('ativo')
    }
}

function animationInit() {
    const sections = document.querySelectorAll('.smooth-scroll')
    sections[0].classList.add('ativo')

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top
            ativar(section, top)
        })
    })
    function ativar(section, top) {
        const metade = window.innerHeight * 0.6
        if (top < metade) {
            section.classList.add('ativo')
        } else {
            section.classList.remove('ativo')
        }
    }
}