import {Galleries} from '../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    '.group',
    'personalData.json'
);

activeGalleries.activeApp();