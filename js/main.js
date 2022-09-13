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
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);



//for every pic in imgFolder
for(pic of imgFolder) {
//use const newImage to create an img element with attributes
    newImage;
//replace the src xxx with the true file path to spacific picture in array imgFolder
    newImage.src.replace('xxx', pic.src);
//replace the alt xxx with the true file path to spacific alt text in array altText
    newImage.alt.replace('xxx', pic.alt);
//add event listener to each newImage
    newImage.addEventListener('click', => (
// find the value of src attribute of current target
// set the src attribute value of the 'displayed-img'<img> to the src passed in as a parameter
        displayedImage.setAttribute('src', pic.src.textContent);
// do the same for the alt attribute
        displayedImage.setAttribute('alt', pic.alt.textContent);
        )
    ); 
}





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
/* THIS IS COMMENTED SO I CAN DEBUGG EARLIER STUFF
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
*******
*/
/* Wiring up the Darken/Lighten button */
