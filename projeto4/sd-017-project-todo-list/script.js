const btn = document.getElementById('criar-tarefa');
btn.addEventListener('click', adiciona);

function adiciona() {
  let elemento = document.createElement('li');
  let input = document.getElementById('texto-tarefa');
  elemento.innerText = input.value;
  elemento.className = 'tarefa';
  
  let elementoPai = document.getElementById('lista-tarefas');
  elementoPai.appendChild(elemento);
  input.value = '';
  elemento.addEventListener('click', cinza);
  function cinza(event) {
    for (
      let index = 0;
      index < document.getElementsByClassName('tarefa').length;
      index++
    ) {
      let tarefas = document.getElementsByClassName('tarefa')[index];
      if ((tarefas.style.backgroundColor = 'rgb(128, 128, 128)')) {
        tarefas.style.backgroundColor = 'white';
      }
    }
    let alvo = event.target;
    alvo.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  elemento.addEventListener('dblclick', riscar);
  function riscar(event) {
    let alvo = event.target;
    if (alvo.className === 'tarefa') {
      alvo.className = 'completed';
    } else if (alvo.className === 'completed') {
      alvo.className = 'tarefa';
    }
  }
  let btn2 = document.getElementById('apaga-tudo');
  btn2.addEventListener('click', apagar);
  function apagar() {
    document.getElementById('lista-tarefas').removeChild(elemento);
  }
  let btn3 = document.getElementById('remover-finalizados');
  btn3.addEventListener('click', remover);
  function remover() {
    for (
      let i = 0;
      i < document.getElementsByClassName('completed').length;
      i += 1
    ) {
      let finalizados = document.getElementsByClassName('completed')[i];
      document.getElementById('lista-tarefas').removeChild(finalizados);
    }
  }
}

btn.addEventListener('click', adiciona);
