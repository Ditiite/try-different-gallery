
//Create new Object
let photoInfoCollection = new PhotoInfoCollection(photosInfo);

//Selects where to display
const roundSlider = document.querySelector('#info-slider');

//Create slider
let infoSlider = new InfoSlider(roundSlider, photoInfoCollection);

infoSlider.displayPerson();
