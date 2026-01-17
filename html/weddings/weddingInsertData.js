import {Galleries} from '../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    '.group',
    'weddingData.json'
);

activeGalleries.activeApp();