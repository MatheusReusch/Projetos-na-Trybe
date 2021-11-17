const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES DE ACORDO COM A ORDEM INDICADA!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui a
    // chave fetchMenu, a qual tem como valor uma função.
    // ```
    
     let objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    // ```
    test('Possui chave fetchMenu', () => {
      expect(Object.keys(objetoRetornado)).toContain('fetchMenu')
    }) 
    // TESTE 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
    // ```
    objetoRetornado = createMenu({ food: {}, drinks: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    // ```
    test('objetoRetornado.fetchMenu() retorna um objeto cujas chaves são somente food e drink', () => {
      expect(Object.keys(objetoRetornado.fetchMenu())).toEqual([ 'food', 'drinks' ])
    }) 
    // TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    objetoRetornado = createMenu({ food: {}, drinks: {} });
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```
    test('Menu passado pra função createMenu é identico ao menu recuperado pela função', () => {
      expect(objetoRetornado.fetchMenu()).toEqual({ food: {}, drinks: {} })
    }) 
    // TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    let objetoRetornado2 = createMenu({ food: {}, drinks: {} });
    // objetoRetornado.consumption // Retorno: []
    // ```
    test('objetoRetornado.consumption, após a criação do menu, retorna um array vazio', () => {
      expect(objetoRetornado2.consumption).toEqual([])
    })
    // TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,
    // passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
    // ao array retornado em `objetoRetornado.consumption`.
    // ```
    let objetoRetornado3 = createMenu({ food: {}, drinks: {} });
    objetoRetornado3.order("coxinha");
    // objetoRetornado.consumption // Retorno: ["coxinha"]
    // ```
    test('tal string é adicionada ao array retornado em objetoRetornado.consumption', () => {
      expect(objetoRetornado3.consumption).toEqual(["coxinha"])
    })
    // TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    // ```
    objetoRetornado.order("coxinha");
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    test('varias strings são adicionadas ao array retornado em objetoRetornado.consumption', () => {
      expect(objetoRetornado.consumption).toEqual(["coxinha", "agua", "sopa", "sashimi"])
    })
    // TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    let objetoRetornado4 = createMenu({ food: {}, drinks: {} });
    objetoRetornado4.order('coxinha');
    objetoRetornado4.order('agua');
    objetoRetornado4.order('coxinha');
    //objetoRetornado4.consumption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    test('strings repetidas são adicionadas ao array retornado em objetoRetornado.consumption', () => {
      expect(objetoRetornado4.consumption).toEqual(['coxinha', 'agua', 'coxinha'])
    })
    // TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    let objetoRetornado5 = createMenu({ food: {coxinha: 5, pastel: 5}, drinks: {agua: 5, refri: 5} });
    objetoRetornado5.order('coxinha');
    objetoRetornado5.order('agua');
    objetoRetornado5.order('coxinha');
    objetoRetornado5.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    test('retorna-se a soma dos preços de tudo que foi pedido', () => {
      expect(objetoRetornado5.pay()).toBe(22)
    })
});
