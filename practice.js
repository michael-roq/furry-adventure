const CAT_FACTS = "https://cat-fact.herokuapp.com/facts";

console.log(CAT_FACTS);

function addFact() {

    fetch(CAT_FACTS)

    .then(function(response){
        console.log(response.json);
        return response.json;
    })
    .then(function(data){
        console.log(data);


        const img = document.createElement('img');
        img.src = CAT_FACTS;
        img.alt = 'An Interesting Cat Fact'

        document.querySelector('.div-name').appendChild(img);

        console.log(document.querySelector('.div-name'));
    });
};

document.querySelector('.add-fact-button').addEventListener('click', addFact);