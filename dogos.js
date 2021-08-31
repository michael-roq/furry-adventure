const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

let select = document.querySelector('.select');
let dogos = document.querySelector('.dogos');
let imageBox = document.querySelector('.dog-img');


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

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

function getDogo (url) {
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(url)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            img.src = data.message;
            //spinner.classList.remove('show');
            //img.classList.add('show')
        })
}

img.addEventListener("load", function () {
    spinner.classList.remove('show');
    img.classList.add('show');
})



/* let replaceablePics = `https://dog.ceo/api/breed/${event.target.value}/images/random`

console.log(replaceablePics);

fetch(replaceablePics)

    .then(function(response){
        return response.json();
    })

    .then(function(data){

        if(dogos.classList.contains('img')) {

            console.log('Removing old image and adding a new image')

            let image = document.querySelector('img');
            image.remove();

            const newImg = document.createElement('img');
            newImg.src = replaceablePics;
            newImg.alt = 'An Cute Dog'

            document.querySelector('.dogos').appendChild(newImg);

        } else {

        console.log('clean slate.  adding a  new image');

        const newImg = document.createElement('img');
        newImg.src = replaceablePics;
        newImg.alt = 'A Cute Dog'

        document.querySelector('.dogos').appendChild(newImg);
        }
        
    }); */