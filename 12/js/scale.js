const imgValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview > img');

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const onScaleButtonClick = (evt) => {
  const scaleInput = Number.parseInt(imgValue.value, 10);
  let scaleCount;
  const buttonScale = evt.target;
  if (buttonScale.matches('.scale__control--bigger') && scaleInput < Scale.MAX) {
    scaleCount =  scaleInput + Scale.STEP;
    imgValue.value = `${scaleCount}%`;
  }

  if (buttonScale.matches('.scale__control--smaller') && scaleInput > Scale.MIN) {
    scaleCount = scaleInput - Scale.STEP;
    imgValue.value = `${scaleCount}%`;
  }

  if (scaleCount >= Scale.MAX) {
    scaleCount = Scale.MAX;
    imgValue.value = `${scaleCount}%`;
  }

  if (scaleCount <= Scale.MIN) {
    scaleCount = Scale.MIN;
    imgValue.value = `${scaleCount}%`;
  }
  imgPreview.style.transform = `scale(${scaleCount / 100})`;
};

export {onScaleButtonClick};
