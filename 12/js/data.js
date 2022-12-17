import {getRandom} from './util.js';

const ID = [];
let idComment = getRandom(1, 250);

const getRandomEl = (elements) => elements[getRandom(0, elements.length - 1)];

const NAMES = [
  'Стася',
  'Виталий',
  'Никита',
  'Сергей',
  'Олег Вещий',
  'Артас',
  'Татьяна Буланова',
  'Ирчик',
  'Алексей',
  'Константин',
  'Кирилллллл',
  'Анна',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. А если плохо...',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Кто я?',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const message = (count) => {
  const fullMessage = [];
  for (let i = 1; i <= count; i++) {
    fullMessage.push (getRandomEl(MESSAGES));
  }
  return fullMessage.join(' ');
};

const oneComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandom(1, 6)}.svg`,
  message: message(getRandom(1, 2)),
  name: getRandomEl(NAMES),
});

const createComments = (count) => {
  const comments = [];

  for (let i = 1; i <= count; i++) {
    while (ID.includes(idComment)) {idComment = getRandom(1, 250);}
    ID.push (idComment);
    comments.push(oneComment(idComment));
  }
  return comments;
};

const onePost = (id) => ({
  id,
  url: `photos/${id}.jpg`, //добавляем картинку
  description: `Описание фотографии ${id}`, //добавляем описание
  likes: getRandom (15, 200), //добавляем количество лайков
  comments: createComments(getRandom(1, 10)), //добавляем комментарии, каждый комментарий содержит имя, аватарку, и текст комментария
});

const createPost = (count) => {
  const pictures = [];
  for (let i = 1; i <= count; i++) {pictures.push(onePost(i));}
  return pictures;
};

export {createPost};
