// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) { return true; }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let virgula = ', ';
  let resultado = array[array.length - 1] + virgula + array[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let quantidade = 0;
  let ordenado = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i += 1) {
    if (ordenado[i] === ordenado[ordenado.length - 1]) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  if (distancia1 === distancia2) { return 'os gatos trombam e o rato foge'; }
  if (distancia1 < distancia2) { return 'cat1'; }
  if (distancia1 > distancia2) { return 'cat2'; }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) { 
      resultado.push('fizzBuzz');
    }
    else if (array[i] % 3 === 0) { resultado.push('fizz');
    }
    else if (array[i] % 5 === 0) { resultado.push('buzz'); 
    }
    else { resultado.push('bug!'); 
    }
  } return resultado;
}

// Desafio 9
function encode(string) {
  let resultado = 
  string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return resultado;
}

function decode(string) {
let resultado = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
return resultado;  
} 

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
} 
