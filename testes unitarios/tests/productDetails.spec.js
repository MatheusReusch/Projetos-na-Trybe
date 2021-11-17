const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    test('Função existe', () => {
    expect(typeof productDetails).toBe('function')
})
    // Teste se o retorno da função é um array.
    test('Retorno é array', () => {
      expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true)
  })
    // Teste se o array retornado pela função contém dois itens dentro.
    test('Retorno tem dois itens dentro', () => {
      expect(Object.keys(productDetails('Alcool gel', 'Máscara')).length).toBe(2)
  })
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    test('Retorno são objetos', () => {
      expect(typeof productDetails('Alcool gel', 'Máscara')[0] === 'object' && typeof productDetails('Alcool gel', 'Máscara')[1] === 'object').toBe(true)
  })
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    test('Retornos são objetos diferentes quando parametros diferentes', () => {
      expect(productDetails('Alcool gel', 'Máscara') !== productDetails('Pomada', 'Sabão')).toBe(true)
  })
    // Teste se os dois productIds terminam com 123.
    test('Ids terminam com 123', () => {
      expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123') && productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123')).toBe(true)
  })
});
