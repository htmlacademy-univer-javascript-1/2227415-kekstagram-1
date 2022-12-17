import {pristine} from './valid.js';
import {closeUp} from './upload.js';
import {showMessageError, showMessageSuccess} from './error.js';
import {sendData} from './api.js';

const buttonSubmit = document.querySelector('.img-upload__submit');
const upForm = document.querySelector('.img-upload__form');

const flagSubmitButton = (flag) => {
  if(flag) {
    buttonSubmit.disabled = true;
    buttonSubmit.textContent = 'Публикую...';
  } else {
    buttonSubmit.disabled = false;
    buttonSubmit.textContent = 'Опубликовать';
  }
};

const submitForm = (onSuccess) => {
  upForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      flagSubmitButton(true);
      sendData(
        () => {
          onSuccess();
          flagSubmitButton(false);
          showMessageSuccess();
          closeUp();
        },
        () => {
          flagSubmitButton(false);
          showMessageError();
          closeUp();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {submitForm};
