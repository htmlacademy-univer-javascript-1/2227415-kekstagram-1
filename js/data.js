import {getRandom} from './util.js';

const ids = [];
const idForPics = [];

for (let i = 0; i < 25; i++) {
  ids[i] = i;
  idForPics[i] = i;
}

function getArr(arr) {
  if (arr.length === 0) {
    throw new Error('ID закончились');
  }
  const r = getRandom(0, arr.length - 1);
  let ans = 0;
  ans = arr[r];
  arr.splice(arr.indexOf(r), 1);
  return ans;
}

function getLikes() {
  return getRandom(15, 201);
}

function getUrl() {
  const idPic = getArr(idForPics);
  return `photos/${idPic}.jpg`;
}

const NAMES = [
  'Сергей',
  'Андрей',
  'Даниил',
  'Владислав',
  'Егор',
  'Артас',
  'Виталий',
  'Никита',
  'Гермиона',
  'Мария',
  'Стася',
  'Станислава',
  'Мэй',
];

function getRandomName() {
  return NAMES[getRandom(0, NAMES.length - 1)];
}

const MESSAGES= [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function getRandomComment() {
  if (getRandom(0, 2) === 1) {
    const commentOne = MESSAGES[getRandom(0, MESSAGES.length - 1)];
    const commentTwo = MESSAGES[getRandom(0, MESSAGES.length - 1)];
    return `${commentOne  } ${  commentTwo}`;
  } else {
    return MESSAGES[getRandom(0, MESSAGES.length - 1)];
  }
}

const DESCRIPTIONS = [
  'В метро',
  'На парах',
  'Кексы - это святое',
  'Куда я жмал?!',
  'Интересно, а что на обед?',
  'Красивый вид',
  'На расслабоне, на чиле',
  'Денчик слазиет',
  'Меланхолично однако',
];

function getRandomDes() {
  return DESCRIPTIONS[getRandom(0, DESCRIPTIONS.length - 1)];
}

const newPost = () => ({
  id: getArr(ids),
  url: getUrl(),
  description: getRandomDes(),
  likes: getLikes(),
  comments: getRandomComment(),
  avatar: `img/avatar-${getRandom(1, 6)}.svg`,
  name: getRandomName(),
});

const posts = Array.from({length: 25}, newPost);

export function createPost() {
  for (let i = 0; i < 25; i++) {
    ids[i] = i;
    idForPics[i] = i;
  }
  const ca = [];
  ca.push(newPost());
  return ca;
}

// eslint-disable-next-line no-console
console.log(posts);
