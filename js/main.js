const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFolder = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/*declaring the array of alt text for each image in img folder*/

const altText = ['Blue human eye', 'Aerial photo of sand dunes', 'Purple flowers', 'Egyptian hieroglyphics', 'Orange butterfly on a green leaf'];
/*
Loop through the array of imgFolder
    for each pic
        insert img element inside thumb-bar <div> 
        (the documentation says this should embed that picture along with its alt text into the
        page)
*/

/* 
Add click event listener to each img inside the thumb-bar div
When clicked, the corresponding image and alt text are displayed in the 
'displayed-img' <img> element
*/

/*
Add click event listener to the <button>
When clicked the darken effect is applied to the full-size image.
When clicked again the darken effect is removed.
*/

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
