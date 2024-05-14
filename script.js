let menu = document.getElementById("menu")

let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abrirFecharMenu() {
    // se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone-x 
        iconeX.style.display = "inline"

        // Esconder icone-barras
        iconeBarras.style.display = "none"

    } else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Esconder icone-x 
        iconeX.style.display = "none"

        // MOstrar icone-barras
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"   
    iconeBarras.style.display = "none"
}


// Função Carrosel

let slide = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numerSlides = slide.length

let banner = document.querySelector(".banner") 

banner.classList.add(slide[slideAtual])

const mostrarProximoSlide = () => {
    // Remove slide anteriror
    banner.classList.remove(slide[slideAtual])

    // 

    if(slideAtual < (numerSlides - 1)) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    // Renderiza o slideAtual
    banner.classList.add(slide[slideAtual])
}

const mostrarSlideAnterior =  () => {
    // Remove slde atual
    banner.classList.remove(slide[slideAtual])

    if(slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numerSlides - 1
    }


    // Renderiza o slideAtual
    banner.classList.add(slide[slideAtual])
}
