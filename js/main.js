function getRandom(min, max) {
  if((min >= 0 && max >= 0) && (min < max)) {
    return Math.random() * (max - min) + min;
  } else {return 0;}
}

function trueLength(str, len) {
  if (str.length <= len) {
    return true;
  }
  else {return false;}
}

getRandom(4, 6);
trueLength('FFFFFF', 10);
