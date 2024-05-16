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

let listaCases = []

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

const carregarCases = () => {
    // Método HTTP GET 
    fetch("http://localhost:3000/cases")
    .then( resposta => resposta.json() )
    .then( (dados) => {
        listaCases = dados
        renderizarCases()
    })
    .catch( erro => console.erro(erro))
}

const solicitarOrcamento = () => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descicao: valorDescricao
    }

    // Enviar requição para a API 
    // Método HTTP POST - Create -> Cadastrar ou criar 
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
        // Limpar os campos
        // Mostrar alert com msg de sucesso
        // CASO ERRO - alert com msg erro
    
    
}