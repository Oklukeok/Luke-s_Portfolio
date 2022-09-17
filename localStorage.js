const objectStrg = {
  name: '',
  mail: '',
  msj: '',
};

document.getElementById('contactForm').addEventListener('change', () => {
  objectStrg.name = document.getElementById('name').value;
  objectStrg.mail = document.getElementById('mail').value;
  objectStrg.msj = document.getElementById('msg').value;

  localStorage.setItem('stored', JSON.stringify(objectStrg));
});

const storedInfo = JSON.parse(localStorage.getItem('stored'));
document.getElementById('name').value = storedInfo.name;
document.getElementById('mail').value = storedInfo.mail;
document.getElementById('msg').value = storedInfo.msj;