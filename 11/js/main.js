import {renderPhotos, postImg} from './pic.js';
import {closeUp} from './upload.js';
import {submitForm} from './success-upload.js';
import './valid.js';
import {initEffects} from './effects.js';
import {showSortPictures} from './filtr.js';

// eslint-disable-next-line no-console
console.log('ssssss');
renderPhotos(postImg);
showSortPictures(postImg);
initEffects();
submitForm(closeUp);

