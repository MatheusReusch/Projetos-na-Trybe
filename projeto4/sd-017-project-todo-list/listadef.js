let botao = document.getElementById('botao')
let paragrafo = {
    nome: '',
}
botao.addEventListener('click', adiciona)
function adiciona () {
paragrafo.nome = input.value
localStorage.setItem(paragrafo.nome, JSON.stringify(paragrafo))
criaElemento(paragrafo)
}

function criaElemento (objeto) {
    let p = document.createElement('p')
    p.innerText = objeto.nome
    let ppai =  document.getElementById('listacontainer')
    ppai.appendChild(p)
}

window.onload = function () {
    if (localStorage.length > 0) {
        for (i = 0; i < localStorage.length; i += 1) {
            let key = localStorage.key(i)
            let objeto = JSON.parse(localStorage[key]);
            criaElemento(objeto)
        }
    }
};

