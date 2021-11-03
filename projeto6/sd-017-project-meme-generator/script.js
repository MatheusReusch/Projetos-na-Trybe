let input = document.getElementById('text-input');
let p = document.getElementById('meme-text');
input.addEventListener('keyup', colocarTexto);
function colocarTexto() {
  p.innerText = input.value;
}

let imagem = document.getElementById('meme-image');
let input2 = document.getElementById('meme-insert');
var loadFile = function (event) {
  imagem.src = URL.createObjectURL(event.target.files[0]);
  imagem.onload = function () {
    URL.revokeObjectURL(imagem.src);
  };
};
