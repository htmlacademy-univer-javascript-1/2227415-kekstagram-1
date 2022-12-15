const imgPreview = document.querySelector('.img-upload__preview > img');
const effectSlider = document.querySelector('.effect-level__slider');
const upEffect = document.querySelector('.img-upload__effects');
const level = document.querySelector('.img-upload__effect-level');
const valuesEffect = document.querySelector('.effect-level__value');
let arr = '';

const Slider = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
};

level.classList.add('visually-hidden');

//Эффекты\\
const effects = {
  none: () => {
    level.classList.add('visually-hidden');
    return 'none';
  },
  marvin: () => {
    level.classList.remove('visually-hidden');
    return `invert(${Math.floor(valuesEffect.value)}%)`;
  },
  sepia: () => {
    level.classList.remove('visually-hidden');
    return `sepia(${parseInt(valuesEffect.value, 10) * 0.01})`;
  },
  heat: () => {
    level.classList.remove('visually-hidden');
    return `brightness(${(parseInt(valuesEffect.value, 10) * 3) * 0.01})`;
  },
  phobos: () => {
    level.classList.remove('visually-hidden');
    return `blur(${(parseInt(valuesEffect.value, 10) * 3) * 0.01}px)`;
  },
  chrome: () => {
    level.classList.remove('visually-hidden');
    return `grayscale(${parseInt(valuesEffect.value, 10) * 0.01})`;
  },
};

//Кнопка выбора эффектов\\
const effectsButton = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (arr !== '') {
      imgPreview.classList.remove(arr);
    }
    effectSlider.noUiSlider.set(100);
    const currentClass = evt.target.classList[1];
    arr = currentClass;

    imgPreview.classList.add(currentClass);
    imgPreview.style.filter = effects[currentClass.replace('effects__preview--', '')]();
  }
};

upEffect.addEventListener('click', effectsButton);

noUiSlider.create(effectSlider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  connect: 'lower',
  step:Slider.STEP,
});

effectSlider.noUiSlider.on('slide', () => {
  valuesEffect.value = Math.round(effectSlider.noUiSlider.get());

  imgPreview.style.filter = effects[arr.replace('effects__preview--', '')]();
});

//Сброс настроек\\
export const defaultSet = () => {
  effectSlider.value = '100%';
  imgPreview.style = 'transform: scale(1.00)';
};

export const reset = () => {
  defaultSet();
  level.noUiSlider.set(100);
  valuesEffect.value = 100;
  level.classList.add('visually-hidden');
  imgPreview.style.filter = null;
  if (arr) {
    imgPreview.classList.remove(arr);
  }
};

