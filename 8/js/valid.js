const hashForm = document.querySelector('text__hashtags');
const commentForm = document.querySelector('text__description');
const loadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const body = document.querySelector('body');

function noReg(value) {
  return value.split(' ').toLowerCase().trim();
}

function uniqueHash(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <arr.length; j++) {
      if(arr[i] === arr[j] && arr[j] !== '#') {return false;}
    }
  }
  return true;
}

const pristine = new Pristine(loadForm, {
  classTo: 'img-upload__field-wrapper',
  successClass: 'form-item__valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'form-item__invalid',
  errorTextClass: 'form__error',
  errorTextTag: 'div',
}, false);

pristine.addValidator(hashForm, (value) =>
  uniqueHash(value), 'Каждый хэштег должен быть уникальным!');

pristine.addValidator(hashForm, (value) =>
  noReg(value).length <= 5, 'Максимальное количество хэштегов - 5!');

// eslint-disable-next-line no-shadow
pristine.addValidator(hashForm, (value) => value === '' || noReg(value).every((value) => /[^-_=+;:,.]$/m.test(value)),
  'Хэштеги не разделенны пробелами!');

pristine.addValidator(commentForm, (value) => value <= 140,
  'Максимальная длина комментария - 140!');

// eslint-disable-next-line no-shadow
pristine.addValidator(hashForm, (value) => noReg(value).every((value) => /^#[a-zA-Zа-яА-ЯёЁ0-9]{0,19}$/.test(value)) ||  value === '',
  'В начале хэштега должен стоять #! Максимальная длина хэштега - 20! Также хэштег не должен содержать символов, кроме букв и цифр');

loadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

const esc = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
};
if(commentForm) {
  commentForm.addEventListener('keydown', esc);
}
if(hashForm) {
  hashForm.addEventListener('keydown', esc);
}

function close() {
  uploadFile.value = '';
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
}

uploadCancel.addEventListener('click',  () => {
  close();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    close();
  }
});

uploadFile.addEventListener('change',  () => {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
});


