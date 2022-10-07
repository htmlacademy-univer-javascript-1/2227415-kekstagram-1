function getRandom(min, max) {
  if (min > max || min < 0 || max < 0) {
    return new Error('Неверный диапазон');
  } else {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
}

function stringLength(str, maxLength) {
  return str.length <= maxLength;
}

getRandom(4, 15);
stringLength('qwerty', 5);

//взято с сайта https://stackoverflow.com/ and
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const id = [];
const idForPic = [];

for (let i = 0; i < 25; i++) {
  id[i] = i;
  idForPic[i] = i;
}

function getId() {
  const r = getRandom(0, id.length);
  let ans = 0;
  if (id.indexOf(r) !== -1 && id.length !== 0) {
    ans = id[r];
    id.splice(id.indexOf(r));
    return ans;
  } else {
    return new Error('ID закончились');
  }
}

function getIdForPic() {
  const r = getRandom(0, idForPic.length);
  let ans = 0;
  if (idForPic.indexOf(r) !== -1 && idForPic.length !== 0) {
    ans = idForPic[r];
    idForPic.splice(idForPic.indexOf(r));
    return ans;
  } else {
    return new Error('ID закончились');
  }
}

function getLikes() {
  return getRandom(15, 201);
}

function getUrl() {
  const idPic = getIdForPic;
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
  'Мэй'
];

function getRandomName() {
  return NAMES[getRandom(0, 13)];
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
    const arr= [
      MESSAGES[getRandom(0, 6)],
      MESSAGES[getRandom(0, 6)],
    ];
    return arr;
  } else {
    return MESSAGES[getRandom(0, 6)];
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
  return DESCRIPTIONS[getRandom(0, 9)];
}

const newPost = () => ({
  id: getId,
  url: getUrl,
  description: getRandomDes,
  likes: getLikes,
  comments: getRandomComment,
  avatar: `img/avatar-${getRandom(1, 6)}.svg`,
  name: getRandomName,
});

const posts = Array.from({length: 25}, newPost);

// eslint-disable-next-line no-console
console.log(posts);


