// Desafio 10
function techList(tech, name) {
  let resposta = []; 
  for (i = 0; i <= tech.sort().length; i += 1) {
    let objects = {tech: tech[i], name: name};
    if (tech.length == 0) {resposta = 'Vazio!'}
    else if (tech != [] && i < tech.length) {resposta.push(objects)}   
   } return resposta;
} 

// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length != 11) {return "Array com tamanho incorreto."}
  let quantidade = 0;
  for (i = 0; i < numeros.length; i += 1) {
     
    for (f = 1; f <= 12; f += 1) {
    if (numeros[i] === numeros[i - f]) {quantidade ++} }
    if(numeros[i] < 0 || numeros[i] > 9 || quantidade >= 2) {return "não é possível gerar um número de telefone com esses valores"}
    
    else if (quantidade <= 1) {quantidade = 0}
 }
    phoneNumber = '(' + numeros[0] + numeros[1] + ')' + ' ' + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9] + numeros[10]
  return phoneNumber;  } 
 let numeros2 = [0,2,1,3,4,1,4,2,7,8,1]
console.log(generatePhoneNumber(numeros2))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
