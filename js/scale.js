import {reset} from './effects.js';
import {defaultSet} from './effects.js';

const imgReduction = document.querySelector('.scale__control--smaller');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgZoom = document.querySelector('.scale__control--bigger');
const imgValue = document.querySelector('.scale__control--value');
const upClose = document.querySelector('#upload-cancel');
const upFile = document.querySelector('#upload-file');
const body = document.querySelector('body');


const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

imgZoom.addEventListener('click', () => {
  let scale = parseInt(imgValue.value, 10) + Scale.STEP;

  if (scale >= Scale.MAX) {
    scale = Scale.MAX;
  }

  imgValue.value = `${scale }%`;
  scale = scale / 100;
  imgValue.style.transform = `scale(${ scale })`;
});

imgReduction.addEventListener('click', () => {
  let scale = parseInt(imgValue.value, 10) - Scale.STEP;

  if (scale >= Scale.MIN) {
    scale = Scale.MIN;
  }

  imgValue.value = `${scale }%`;
  scale = scale / 100;
  imgValue.style.transform = `scale(${ scale })`;
});


//Обработчики на закрытие окна\\
upFile.addEventListener('change',  () => {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  defaultSet();
});

const close  = () => {
  upFile.value = '';
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  reset();
};

upClose.addEventListener('click',  () => {
  close();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    close();
  }
});
