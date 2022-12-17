import {createPost} from './data.js';
import {renderBigPic} from './bigPic.js';

const picContent = document.querySelector('#picture').content.querySelector('.picture');
const picsList = document.querySelector('.pictures');

export const postImg = createPost(25);

const renderPhoto = (ph) => {
  const onePhoto = picContent.cloneNode(true); //клонируем узел
  onePhoto.querySelector('.picture__img').src = ph.url; //Добавляем данные фотографии
  onePhoto.querySelector('.picture__comments').textContent = ph.comments.length;
  onePhoto.querySelector('.picture__likes').textContent = ph.likes;

  onePhoto.addEventListener('click', (evt) => { //Увеличиваем фото, если на него нажали
    evt.preventDefault();
    renderBigPic(ph);
  });

  return onePhoto;
};

export const renderPhotos = (pictures) => { //Рендеринг всех фотографий
  const photoListFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    photoListFragment.appendChild(renderPhoto(picture));
  });

  picsList.appendChild(photoListFragment);
};


