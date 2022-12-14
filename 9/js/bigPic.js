
//Находим отдел с полноразмерными фото
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');

//Данные об изозображениях
const socCommCount = bigPicture.querySelector('.social__comment-count');
const picCancel = document.querySelector('.big-picture__cancel');
const commLoad = bigPicture.querySelector('.comments-loader');
const socComment = document.querySelector('.social__comment');
const socComments = document.querySelector('.social__comments');

//Отображение комменатрией
let commentCount = 5;
let count = commentCount;
let commentView = [];

const addRemove = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  // eslint-disable-next-line no-use-before-define
  picCancel.removeEventListener('click', cancelClick);
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', cancelKey);
  socComments.innerHTML = '';
  count = 5;
  commentView = [];
};

const cancelKey = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    addRemove();
  }
};

const cancelClick = (evt) => {
  evt.preventDefault();
  addRemove();
};

function commentCreate(com) {
  const oneComment = socComment.cloneNode(true);
  oneComment.querySelector('.social__text').textContent = com.message;
  oneComment.querySelector('.social__picture').src = com.avatar;
  oneComment.querySelector('.social__picture').alt = com.name;
  return oneComment;
}

//Отображение комменатрией
const renderComment = (arr) => {
  const fragment = document.createDocumentFragment();
  const len = arr.length;
  const comCr = () => {commentCreate(arr);};
  socComments.innerHTML = '';
  commentView = arr.slice(0, count);
  count = (len > commentCount) ? count : len;

  // eslint-disable-next-line no-template-curly-in-string
  socCommCount.textContent = `Комментариев загруженно: ${len} из 5`;
  commentView.forEach((comm) => {fragment.appendChild(commentCreate(comm));});
  socComments.appendChild(fragment);

  if (len > socComment.length && len > commentCount) {
    commLoad.classList.remove('hidden');
    commLoad.addEventListener('click', comCr, {once: true});
  } else {
    commLoad.classList.add('hidden');
  }

  count += 5;
};

export const renderingBigPicture = (photo) => {
  socComments.innerHTML = '';
  commentView = [];
  commentCount = 5;

  body.classList.add('modal-open');
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length.toString();
  bigPicture.querySelector('.big-picture__img > img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes.toString();

  renderComment(photo.comments.slice());
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  bigPicture.classList.remove('hidden');
  picCancel.addEventListener('click', cancelClick);
  document.addEventListener('keydown',  cancelKey);
};
