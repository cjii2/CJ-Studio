import {Galleries} from '../js/MainCreateCards.js'
   
const activeGalleries = new Galleries(
    '.group',
    'productsData.json'
);

activeGalleries.activeApp();