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