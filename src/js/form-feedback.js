// Імпорт  throttle
import throttle from 'lodash.throttle';

const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const formFeedback = document.querySelector('.feedback-form');
const btnForm = document.querySelector('button');

const STORAGE_KEY = 'form-feedback';
btnForm.disabled = true

formFeedback.addEventListener('input', throttle(inputSave, 1000));
formFeedback.addEventListener('submit', formSubmit);

const saveFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (saveFeedback) {
  input.value.trim() = saveFeedback.email;
    textarea.value.trim() = saveFeedback.message;
    btnForm.disabled = !(input.value && textarea.value)
}

function inputSave() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: input.value.trim(),
      message: textarea.value.trim(),
    })
  );
    btnForm.disabled = !(input.value && textarea.value)
}

function formSubmit(event) {
  event.preventDefault();

  console.log({
    email: input.value.trim(),
    message: textarea.value.trim(),
  });

  formFeedback.reset();
    localStorage.removeItem(STORAGE_KEY);
    btnForm.disabled = true
}
