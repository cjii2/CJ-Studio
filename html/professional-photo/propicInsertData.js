import {Galleries} from '../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    '.group',
    'propicData.json'
);

activeGalleries.activeApp();
