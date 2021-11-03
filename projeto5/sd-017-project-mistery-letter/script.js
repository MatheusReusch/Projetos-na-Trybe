let btn = document.getElementById('criar-carta');
btn.addEventListener('click', criarCarta);
function criarCarta() {
  let input = document.getElementById('carta-texto');
  let string = input.value;
  let array = string.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    let palavras = array[i];
    let p = document.getElementById('carta-gerada');
    let carta = document.createElement('span');
    carta.innerText = palavras;
    carta.style.padding = '10px';
    let cartapai = document.getElementById('carta-gerada');
    cartapai.appendChild(carta);
    if (string == '' || string == ' ') {
      p.innerText = 'Por favor, digite o conteúdo da carta.';
    }
    let estilo = ['newspaper', 'magazine1', 'magazine2']
    let tamanho = ['medium', 'big', 'reallybig']
    let rotação = ['rotateleft', 'rotateright']
    let inclinacao = ['skewleft', 'skewright']
    carta.className = estilo[Math.floor(Math.random() * estilo.length)] + ' ' + tamanho[Math.floor(Math.random() * tamanho.length)]  //rotação[Math.floor(Math.random() * rotação.length)]]
    
}}

