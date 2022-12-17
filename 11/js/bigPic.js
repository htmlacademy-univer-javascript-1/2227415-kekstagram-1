const COMMENTS_MAX = 5;

const bigPicture = document.querySelector('.big-picture');
const socComCount = bigPicture.querySelector('.social__comment-count');
const picCancel = bigPicture.querySelector('.big-picture__cancel');
const socComments = bigPicture.querySelector('.social__comments');
const socComment = bigPicture.querySelector('.social__comment');
const comLoad = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

let count = 0;

function createComment(com) {
  const oneComment = socComment.cloneNode(true);
  oneComment.querySelector('.social__text').textContent = com.message;
  oneComment.querySelector('.social__picture').src = com.avatar;
  oneComment.querySelector('.social__picture').alt = com.name;
  return oneComment;
}

const renderBigPic = (picture) => {

  const closeKey = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeBigPicture();
    }
  };

  const closeClick = () => {
    closeBigPicture();
  };

  function closeBigPicture() {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeKey);
    picCancel.removeEventListener('click', closeClick);
    comLoad.removeEventListener('click', newCommentsClick);
    count = 0;
  }

  function newCommentsClick() {
    count += COMMENTS_MAX;
    renderNewComments();
  }

  function renderNewComments() {
    socComments.innerHTML = '';
    const commentsFragment = document.createDocumentFragment();
    const commentsToShow = picture.comments.slice(0, count + COMMENTS_MAX);
    commentsToShow.forEach((comment) => {
      commentsFragment.appendChild(createComment(comment));
    });
    socComments.appendChild(commentsFragment);
    comLoad.classList.toggle('hidden', picture.comments.length === commentsToShow.length);
    socComCount.innerHTML = `${commentsToShow.length} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
  }

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  renderNewComments();
  comLoad.addEventListener('click', newCommentsClick);

  picCancel.addEventListener('click', closeClick);
  document.addEventListener('keydown', closeKey);
};

export {renderBigPic};
