import {Galleries} from '../js/MainCreateCards.js'

const activeGalleries = new Galleries(
    '.group',
    'eventsData.json'
);

activeGalleries.activeApp();