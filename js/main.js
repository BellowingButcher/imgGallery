const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFolder = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const altText = ['Blue human eye', 'Aerial photo of sand dunes', 'Purple flowers', 'Egyptian hieroglyphics', 'Orange butterfly on a green leaf'];

/*declaring the array of alt text for each image in img folder*/
//For each item in the array of imgFileNames add atribute alt
//in each item alt atribute add alt text found in imgAltText

/*
-This function will take an input from the array of imgFileNames
-Create an img element inside of the thumb-bar div
-embed picture and also add alt text from the imgAltText
*/


/*
for (img of imgFileNames) {
    
}
*/
/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
