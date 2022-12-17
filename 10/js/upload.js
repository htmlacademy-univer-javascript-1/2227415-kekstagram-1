import {onFilterButtonChange, scUpload, effectList, lvlEffect} from './effects.js';
import {onScaleButtonClick} from './scale.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'heic'];
const upClose = document.querySelector('.img-upload__cancel');
const upFile = document.querySelector('.img-upload__input');
const upForm = document.querySelector('.img-upload__form');
const overlayFile = document.querySelector('.img-upload__overlay');
const imgPreview = document.querySelector('.img-upload__preview > img');
const body = document.querySelector('body');

const uploadImage = () => {
  const file = upFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
};

const closeClick = () => {
  closeUp ();
};

const closeKey = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUp();
  }
};

function closeUp () {
  overlayFile.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeKey);
  document.removeEventListener('click', closeClick);
  scUpload.removeEventListener('click', onScaleButtonClick);
  effectList.removeEventListener('change', onFilterButtonChange);
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  upForm.reset();
}

function showUp (evt) {
  overlayFile.classList.remove('hidden');
  body.classList.add('modal-open');
  upClose.addEventListener('click', closeClick);
  document.addEventListener('keydown',closeKey);
  lvlEffect.classList.add('hidden');
  scUpload.addEventListener('click', onScaleButtonClick);
  effectList.addEventListener('change', onFilterButtonChange);
  uploadImage(evt);
}

upFile.addEventListener('change', showUp);

export {showUp, closeUp, body};
