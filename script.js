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

const selecionarSlide = (indiceSlide) => {
    slide.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slide[indiceSlide])
}

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=41",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação ondes os funcionarios devem proopr e implementR IDEIAS INOVADORES"
    },

    {
        imagem: "https://unsplash.it/600/400?image36",
        descricao: "Uma empresa de consultiria cria uma narrativa interativa de gamificação para seu programa de trinamento"
    },

    {
        imagem: "https://unsplash.it/600/400?27",
        descricao: "Uma empresa de vendas imoplementa uma competição gamificada entre qiepes que competem pelo topo do ranking"
    },

    {
        imagem: "https://unsplash.it/600/400?34",
        descricao: "Uma empresa de saude promove o bem-estar dos funcionarios atravez de um desafio de gamificação de condicionamento fisico"
    }
]
const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // Templete strings
    let template = ""

    listaCases.forEach(cardCase => {
        template += `<div class="card">
        <img src="${cardCase.imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button></div>`
    })

    elementoLista.innerHTML = template
}