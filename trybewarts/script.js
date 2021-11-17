const botao = document.getElementById('botao');
const inputemail = document.getElementById('email');
const inputsenha = document.getElementById('senha');
function validar() {
  if (
    inputemail.value === 'tryber@teste.com'
    && inputsenha.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao.addEventListener('click', validar);

const btnSubmit = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');

function enableButton() {
  if (agreementCheckbox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
const carac = ' caracteres restantes';
agreementCheckbox.addEventListener('click', enableButton);
const counter = document.getElementById('counter');
counter.innerHTML = 500 + carac;
const textarea = document.getElementById('textarea');
function contar() {
  counter.innerHTML = 500 - textarea.value.length + carac;
  console.log(counter);
  return counter;
}
textarea.addEventListener('keyup', contar);

const mainForm = document.querySelector('#evaluation-form');
const userName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
let subjects = '';
function fillSubject() {
  subjects = '';
  const subjectsList = document.getElementsByName('content');
  for (let i = 0; i < subjectsList.length; i += 1) {
    if (subjectsList[i].checked) {
      subjects += `${subjectsList[i].value}, `;
    }
  }
}
function replaceForm() {
  fillSubject();
  const house = document.querySelector('select[name=house]').value;
  const family = document.querySelector('input[name=family]:checked').value;
  const evaluation = document.querySelector('input[name=rate]:checked').value;
  mainForm.innerHTML = '<br>Formulário enviado com Sucesso!<br><br>';
  mainForm.innerHTML += `Nome: ${userName.value} ${lastName.value}<br>`;
  mainForm.innerHTML += `Email: ${email.value}<br>`;
  mainForm.innerHTML += `Casa: ${house}<br>Família: ${family}<br>`;
  mainForm.innerHTML += `Matérias: ${subjects}<br>`;
  mainForm.innerHTML += `Avaliação: ${evaluation}<br>Observações: ${textarea.value}<br>`;
}
btnSubmit.addEventListener('click', replaceForm);
