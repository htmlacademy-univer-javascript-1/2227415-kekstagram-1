import {renderPhotos, postImg, getPic} from './pic.js';
import {closeUp} from './upload.js';
import {submitForm} from './success-upload.js';
import {initEffects} from './effects.js';
import {showSortPictures} from './filtr.js';
import {getData} from './api.js';

// eslint-disable-next-line no-console
console.log('ssssss');
// renderPhotos(postImg);
// showSortPictures(postImg);
getData((pictures) => {
  renderPhotos(pictures);
  showSortPictures(pictures);
});
initEffects();
submitForm(closeUp);
