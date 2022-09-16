const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picName = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const picAlt = ['A human eye', 'An aerial photo of sand dunes', 'purple flowers', 'Ejyption Hyroglyphs', 'Butterfly on a green leaf']
/* Looping through images */
for (image of picName) {

    let newSrc = image;
    let newAlt = image;

const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/' + newSrc);
newImage.setAttribute('alt', newAlt);
thumbBar.appendChild(newImage);

}

thumbBar.addEventListener('click', () => {
    /*bigImage = document.querySelector('#displayed-img');
    bigImage.setAttribute('src', EventTarget);
    bigImage.setAttribute('alt', EventTarget);*/
    document.querySelector('#displayed-img').setAttribute('src', EventTarget);
})
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {

    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent('Lighten');
        overlay.style.background-color = rgba(0,0,0,0);
    }
})
