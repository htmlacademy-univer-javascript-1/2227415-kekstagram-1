import {createPost} from './data.js';

//Находим отдел с полноразмерными фото
const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.picture');
const post = createPost();
const body = document.querySelector('body');

//Данные об изозображениях
const counterLikes = bigPicture.querySelector('.likes-count'); //Счётчик лайков
const loadComment = bigPicture.querySelector('.comments-loader'); //Загрузка новых комментов
const counterComments = document.querySelector('.comments-count');
const socCommentsCount = bigPicture.querySelector('.social__comment-count');//Счётчик комментов
const socComments = bigPicture.querySelector('.social__comment'); //Список комментариев под фотографией
const pointer = socComments.querySelector('li');
const escClick = document.querySelector('#picture-cancel');
const socialCaption = document.querySelector('.social__caption'); //Описание фотографии

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    addRemove();
  }
});

escClick.addEventListener('click', () => {
  addRemove();
});

//Загрузка данных
function loadData(posts) {
  bigPicture.src = posts.url;
  counterLikes.textContent = posts.likes.toString();
  socialCaption.textContent = posts.description;
  counterComments.textContent = posts.comments.length.toString();
}

function addRemove() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

const renderingBigPicture = () => {
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', () => {
      bigPicture.classList.remove('hidden');

      loadData(post[i]);

      post[i].comments.forEach((dataComment) => { // проход по каждому комментарию
        const oneComment = pointer.cloneNode(true);
        oneComment.querySelector('.social__text').textContent = dataComment['message'];
        oneComment.querySelector('img').src = dataComment['avatar'];
        oneComment.querySelector('img').alt = dataComment['name'];
        oneComment.appendChild(oneComment);
      });

      socCommentsCount.classList.add('hidden');
      loadComment.classList.add('hidden');
      body.classList.remove('modal-open');
    });
  }
};

renderingBigPicture();
