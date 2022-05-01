
let btnGen = document.querySelector('button');
let myImg = document.querySelector('#img');

function addFace() {
    myImg.src = faker.image.avatar(); 
}

btnGen.addEventListener('click', () => {
    let randomCard = faker.helpers.createCard(); 

    // console.log(randomCard); 
    //object destructuring to pull the data 
    let { name, email, address: {city, country, zipcode}} = randomCard; 

    document.querySelector('#name').value = name; 
    document.querySelector('#email').value = email; 
    document.querySelector('#city').value = city; 
    document.querySelector('#zipcode').value = zipcode; 
    document.querySelector('#country').value = country; 
    addFace(); 
}); 

