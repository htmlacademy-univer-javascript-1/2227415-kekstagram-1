import {renderPhotos} from './pic.js';
import {getRandomElements} from './util.js';


const RANDOM_QUANTITY = 10;
const TIME_OUT_DELAY = 500;
const filters = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');


const debounce = (callback, timeoutDelay = TIME_OUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const compareComments = (photoA, photoB) => {
  const rankA = photoA.comments.length;
  const rankB = photoB.comments.length;
  return rankB - rankA;
};

const createDefaultFilter = (pictures) => pictures.slice();

const createRandomFilter = (pictures) => {
  const picturesArray = pictures.slice();
  return getRandomElements(picturesArray).slice(0, RANDOM_QUANTITY);
};

const createDiscussedFilter = (pictures) => {
  const picturesArray = pictures.slice();
  return picturesArray.sort(compareComments);
};

const remove = () => {
  const activeButton = document.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
};

const clear = () => {
  const picturesAll = document.querySelectorAll('.picture');
  picturesAll.forEach((picture) => {
    picture.remove();
  });
};

const renderSortPictures = (pictures) => {
  clear();
  renderPhotos(pictures);
};

const showSortPictures = (pictures) => {
  filters.classList.remove('img-filters--inactive');
  filterDefault.addEventListener('click', debounce((evt) => {
    remove();
    if (evt.target === filterDefault) {
      filterDefault.classList.add('img-filters__button--active');
    }
    renderSortPictures(createDefaultFilter(pictures));
  }));
  filterRandom.addEventListener('click', debounce((evt) => {
    remove();
    if (evt.target === filterRandom) {
      filterRandom.classList.add('img-filters__button--active');
    }
    renderSortPictures(createRandomFilter(pictures));
  }));
  filterDiscussed.addEventListener('click', debounce((evt) => {
    remove();
    if (evt.target === filterDiscussed) {
      filterDiscussed.classList.add('img-filters__button--active');
    }
    renderSortPictures(createDiscussedFilter(pictures));
  }));
};

export {showSortPictures};
