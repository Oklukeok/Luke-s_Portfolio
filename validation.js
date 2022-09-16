const mail = document.getElementById('mail');

const form = document.getElementById('form');

const word = document.getElementById('mistake');

form.addEventListener('submit', (e) => {
  if (mail.value === mail.value.toLowerCase()) {
    word.textContent = '';
  } else {
    e.preventDefault();
    word.textContent = 'The email must be in lowercase';
  }
});