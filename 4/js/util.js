function getRandom(min, max) {
  if (min > max || min < 0 || max < 0) {
    throw new Error('Неверный диапазон');
  } else {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
}
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function stringLength(str, maxLength) {
  return str.length <= maxLength;
}

//https://stackoverflow.com/

getRandom(4, 15);
stringLength('qwerty', 5);

export{getRandom};
