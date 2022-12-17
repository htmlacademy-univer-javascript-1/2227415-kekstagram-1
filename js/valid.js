const regex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_STRING_LENGTH = 140;
const HASHTAGS_QUANTITY = 5;
const upForm = document.querySelector('.img-upload__form');
const hashtagsField = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');

const checkCommentsLength = (value) => value.length <= MAX_STRING_LENGTH;

const getHashtags = (string) => string.split(' ').filter((item) => item !== '');

const getUniqueHashtags = (string) => {
  const hashtags = getHashtags(string);
  const uniqueSet = new Set(hashtags);
  return hashtags.length === uniqueSet.size;
};

const checkQuantity = (string) => getHashtags(string).length <= HASHTAGS_QUANTITY;

const getHashtagsToLowerCase = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.map((element) => element.toLowerCase());
};


const checkHashtagsSymbols = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.every((element) => regex.test(element));
};


const pristine = new Pristine(upForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'text-help'
}, true);
pristine.addValidator(commentsField, checkCommentsLength, 'Максимальная длина комментария - 140!');
pristine.addValidator(hashtagsField, getUniqueHashtags, 'Каждый хэштег должен быть уникальным!');
pristine.addValidator(hashtagsField, checkQuantity, 'Максимальное количество хэштегов - 5!');
pristine.addValidator(hashtagsField, getHashtagsToLowerCase, '');
pristine.addValidator(hashtagsField, checkHashtagsSymbols, 'В начале хэштега должен стоять #! Максимальная длина хэштега - 20! Также хэштег не должен содержать символов, кроме букв и цифр');

export {pristine};
