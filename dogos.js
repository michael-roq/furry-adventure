const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

let select = document.querySelector('.select');
let dogos = document.querySelector('.img-display-card');
let imageFrame = document.querySelector('.img-display-card__frame');
let imageBox = document.querySelector('.img-display-card__img');


function resizer(ratio){

    console.log(ratio);

    console.log(`The ratio of this image is ${ratio}`);

    if(ratio <= 1.667) {
        imageBox.style.height = "";
        imageBox.style.width = "100%";
    } else {
        imageBox.style.height = "100%";
        imageBox.style.width = "";
    }
}


fetch(BREEDS_URL)   
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        let arrayOfBreeds = Object.keys(data.message);
        console.log(arrayOfBreeds); 
        for(let i = 0; i < arrayOfBreeds.length; i++) { 
 
            const option = document.createElement('option');

            option.value = arrayOfBreeds[i];

            option.innerText = arrayOfBreeds[i];

            select.appendChild(option);
        }
    })


select.addEventListener('change', function(event){

    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

    getDogo(url);


    // make url

    // show loading spinner

    //fetch from the API

    //use the URL to change the current image

    //stop showing loading spinner

});

// const img = document.querySelector('.img-display-card__img');
const spinner = document.querySelector('.spinner');

function getDogo(url) {

    spinner.classList.add('show');
    dogos.classList.remove('show');
    console.log(`Dogos classList at this moment is ${dogos.classList}`);

    fetch(url)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            imageBox.src = data.message;
            // spinner.classList.remove('show');
            // dogos.classList.add('show');

            var newImage = document.createElement('img');
            newImage.src = data.message;
        
            var poll = setInterval(function () {
                if (newImage.naturalWidth) {
                    clearInterval(poll);
                    console.log(newImage.naturalWidth, newImage.naturalHeight);
                }

            }, 10);

        
            newImage.onload = function () { 
                console.log('Fully loaded');
                spinner.classList.remove('show');
                dogos.classList.add('show');
                let ratio = newImage.naturalWidth/newImage.naturalHeight;
                resizer(ratio); 
            }
        })
    // resizer(img.src);
}



// imageBox.addEventListener("load", function () {
//     spinner.classList.remove('show');
//     dogos.classList.add('show');
// })