import {EFFECTS} from './util.js';

const scUpload = document.querySelector('.img-upload__scale');
const lvlSlider = document.querySelector('.effect-level__slider');
const lvlEffect = document.querySelector('.effect-level');
const lvlValue = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview > img');
const effectList = document.querySelector('.effects__list');

const initEffects = () => {
  noUiSlider.create(lvlSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => parseFloat(value),
    },
  });
};

const onFilterButtonChange = (evt) => {
  const evtHandler = evt.target.value;
  if (evtHandler === 'none') {
    lvlEffect.classList.add('hidden');
    imgPreview.style.filter = 'none';
  }  else {
    lvlEffect.classList.remove('hidden');
    imgPreview.removeAttribute('class');
    imgPreview.classList.add(`effects__preview--${evtHandler}`);
    lvlSlider.noUiSlider.updateOptions(EFFECTS[evtHandler].options);
    lvlSlider.noUiSlider.on('update', () => {
      lvlValue.value = lvlSlider.noUiSlider.get();
      imgPreview.style.filter = `${EFFECTS[evtHandler].filter}(${lvlValue.value}${EFFECTS[evtHandler].units})`;
    });
  }
};

export {onFilterButtonChange, initEffects, scUpload, effectList, lvlEffect};
