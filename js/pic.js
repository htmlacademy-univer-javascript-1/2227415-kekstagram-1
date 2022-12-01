import {createPost} from './data.js';


//Ищем шаблон по id
const photosTemplate = document.querySelector('#picture').content;
//Контейнер фото других пользователей
const picsList = document.querySelector('.pictures');

const postImg = createPost();
const picFragment = document.createDocumentFragment();

postImg.forEach(({url, likes, comments}) => {
  const onePhoto = photosTemplate.cloneNode(true); //клонируем узел
  onePhoto.querySelector('.picture__img').src = url;
  onePhoto.querySelector('.picture__likes').textContent = likes;
  onePhoto.querySelector('.picture__comments').textContent = comments;
  picFragment.appendChild(onePhoto);
});
picsList.appendChild(picFragment);

