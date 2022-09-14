const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

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


//for every pic as a string in imgFolder
for(pic of imgArray) {
// creates let vars for changing displayed image src/alt
    let displayedSrc = pic
    let displayedAlt = pic;
//use const newImage to create an img element with attributes
const newImage = document.createElement('img');
thumbBar.appendChild(newImage);
//replace the src xxx with the true file path to spacific picture in array imgFolder
    newImage.setAttribute('src', '/img/' + displayedSrc);
//replace the alt xxx with the true file path to spacific alt text in array altText
    newImage.setAttribute('alt', displayedAlt);
//add event listener to each newImage
    newImage.addEventListener('click', (ev) => {
        console.log(ev);
// find the value of src attribute of current target
// set the src attribute value of the 'displayed-img'<img> to the src passed in as a parameter
        displayedImage.setAttribute('src', displayedSrc);
// do the same for the alt attribute
        displayedImage.setAttribute('alt', displayedAlt);
    });
}


/*
Add click event listener to the <button>
When clicked the darken effect is applied to the full-size image.
When clicked again the darken effect is removed.
*/

// delcares the dimmer function
function dimmer () {
//starts if statement. If the buttons class is equil to 'dark'
    if (btn.getAttribute('class') === 'dark') {
// Then run this; set buttons attribute class = light
        btn.setAttribute('class', 'light');
// Then run this; set buttons text content to lighten
        btn.setTextContent('Lighten');
// Then change the const overlay background color to red,green,blue,???
        overlay.style.backgroundcolor = rgba(0, 0, 0, 0.5);
    
    }
//after last if statement the function goes to the next if statment

    if (btn.getAttribute('class') !== 'dark') {
//then changes class of button to dark
        btn.setAttribute('class', 'dark');
//Then sets the buttons text to darken
        btn.setTextContent('darken');
//Then changes the overlay background color
        overlay.style.backgroundcolor = rgba(0, 0, 0, 0, 0);
    }
}

//adds event listener to dimmer button

/* Wiring up the Darken/Lighten button */
