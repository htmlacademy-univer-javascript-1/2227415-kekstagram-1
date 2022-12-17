import {renderPhotos, postImg} from './pic.js';
import {closeUp} from './upload.js';
import {submitForm} from './success-upload.js';
import './valid.js';
import {initEffects} from './effects.js';

// eslint-disable-next-line no-console
console.log('ssssss');
renderPhotos(postImg);
initEffects();
submitForm(closeUp);

