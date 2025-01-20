const inputs = document.querySelectorAll('.inputs');
const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling;

    if (input.value.trim() === '') {
      input.classList.add('input-invalido');
      input.classList.remove('input-valido');
      errorMessage.classList.add('mostrar');
    } else {
      input.classList.add('input-valido');
      input.classList.remove('input-invalido');
      errorMessage.classList.remove('mostrar');
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const errorMessage = input.nextElementSibling;

    if (input.value.trim() !== '') {
      input.classList.add('input-valido');
      input.classList.remove('input-invalido');
      errorMessage.classList.remove('mostrar');
    } else {
      input.classList.add('input-invalido');
      input.classList.remove('input-valido');
      errorMessage.classList.add('mostrar');
    }
  });
});