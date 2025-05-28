

// Menu Mobile
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggleButton && menu) {
  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('ativo');
  });
}

// Validação do formulário (apenas no arquivo contato.html)
const form = document.querySelector('.formulario');

if (form) {
  form.addEventListener('submit', function (e) {
    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const mensagem = form.querySelector('#mensagem');

    if (!nome.value || !email.value || !mensagem.value) {
      e.preventDefault();
      alert('Por favor, preencha todos os campos antes de enviar.');
    } else {
      alert('Mensagem enviada com sucesso!');
    }
  });
}