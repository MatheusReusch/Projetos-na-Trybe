let paleta = document.createElement('div')
paleta.style.backgroundColor = 'black'
paleta.className = 'color selected'
paleta.innerHTML = '.'
let paletapai = document.getElementById('color-palette')
paletapai.appendChild(paleta)

let paleta2 = document.createElement('div')
paleta2.style.backgroundColor = 'red'
paleta2.innerHTML = '.'
paleta2.className = 'color'
let paleta2pai = document.getElementById('color-palette')
paleta2pai.appendChild(paleta2)

let paleta3 = document.createElement('div')
paleta3.style.backgroundColor = 'blue'
paleta3.innerHTML = '.'
paleta3.className = 'color'
let paleta3pai = document.getElementById('color-palette')
paleta3pai.appendChild(paleta3)

let paleta4 = document.createElement('div')
paleta4.style.backgroundColor = 'green'
paleta4.innerHTML = '.'
paleta4.className = 'color'
let paleta4pai = document.getElementById('color-palette')
paleta4pai.appendChild(paleta4)

for (let i = 0; i <= 24; i += 1) {
    let pixel = document.createElement('div')
    pixel.className = 'pixel'

    pixel.innerHTML = '.'
    let pixelpai = document.getElementById('pixel-board')
    pixelpai.appendChild(pixel)
    pixel.addEventListener('click', colorir)
    function colorir(event) {
        let alvo = event.target
        if (document.getElementsByTagName('div')[0].className == 'color selected') { alvo.style.backgroundColor = 'black' }
        else if (document.getElementsByTagName('div')[1].className == 'color selected') { alvo.style.backgroundColor = 'red' }
        else if (document.getElementsByTagName('div')[2].className == 'color selected') { alvo.style.backgroundColor = 'blue' }
        else if (document.getElementsByTagName('div')[3].className == 'color selected') { alvo.style.backgroundColor = 'green' }
    }
}

function limpar() {
    for (let index = 0; index <= 24; index += 1) {
        let pixels = document.getElementsByClassName('pixel')[index]
        pixels.style.backgroundColor = 'white'
        console.log(pixels)
    }
}


document.getElementsByClassName('color')[0].addEventListener('click', selecao1)

function selecao1() {
    paleta.className = 'color selected'
    paleta2.className = 'color'
    paleta3.className = 'color'
    paleta4.className = 'color'
    console.log('funcionou')
}

document.getElementsByClassName('color')[1].addEventListener('click', selecao2)

function selecao2() {
    paleta2.className = 'color selected'
    paleta.className = 'color'
    paleta3.className = 'color'
    paleta4.className = 'color'
    console.log('funcionou')
}

document.getElementsByClassName('color')[2].addEventListener('click', selecao3)

function selecao3() {
    paleta3.className = 'color selected'
    paleta2.className = 'color'
    paleta.className = 'color'
    paleta4.className = 'color'
    console.log('funcionou')
}

document.getElementsByClassName('color')[3].addEventListener('click', selecao4)

function selecao4() {
    paleta4.className = 'color selected'
    paleta2.className = 'color'
    paleta.className = 'color'
    paleta3.className = 'color'
    console.log('funcionou')
}

let btn = document.createElement('button')
btn.innerText = 'Limpar'
btn.id = 'clear-board'
let btnpai = document.getElementById('botao')
btnpai.appendChild(btn)
btn.addEventListener('click', limpar)





