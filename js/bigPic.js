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

//Отображение комменатрией
const commentCount = 5;
let count = commentCount;
let commentView = [];

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
  count = commentCount;
  commentView = [];
  socComments.innerHTML = '';
}

function commentCreate(com) {
  const oneComment = pointer.cloneNode(true);
  oneComment.querySelector('.social__text').textContent = com.message;
  oneComment.querySelector('img').src = com.avatar;
  oneComment.querySelector('img').alt = com.name;
  oneComment.appendChild(oneComment);
  return oneComment;
}

//Отображение комменатрией
const renderComment = (arr) => {
  const fragment = document.createDocumentFragment();
  const len = arr.length;
  socComments.innerHTML = '';
  commentView = arr.slice(0, count);
  count = (len > commentCount) ? count : len;
  const comCr = () => {commentCreate(arr);};

  // eslint-disable-next-line no-template-curly-in-string
  socCommentsCount.textContent = 'Комментариев загруженно: 5 из ${len}';
  commentView.forEach((c) => {fragment.appendChild(commentCreate(c));});
  socComments.appendChild(fragment);

  if (len > socComments.length && len > commentCount) {
    socComments.classList.remove('hidden');
    socComments.addEventListener('click', comCr, {once: true});
  } else {
    socComments.classList.add('hidden');
  }

  count += 5;
};

const renderingBigPicture = () => {
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', () => {
      bigPicture.classList.remove('hidden');

      loadData(post[i]);

      // post[i].comments.forEach((dataComment) => { // проход по каждому комментарию
      //   const oneComment = pointer.cloneNode(true);
      //   oneComment.querySelector('.social__text').textContent = com.message;
      //   oneComment.querySelector('img').src = com.avatar;
      //   oneComment.querySelector('img').alt = com.name;
      //   oneComment.appendChild(oneComment);
      // });

      renderComment(post[i].comments.slice());

      socCommentsCount.classList.add('hidden');
      loadComment.classList.add('hidden');
      body.classList.remove('modal-open');
    });
  }
};
renderingBigPicture();
