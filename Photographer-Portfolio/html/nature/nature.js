import {Galleries} from '../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    '.group',
    'DataOfNature.json'
);


activeGalleries.activeApp();