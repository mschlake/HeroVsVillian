'use strict';

var characters = [] ;
const apiKey = '3108457009190775';

//display characters and information on page
function displayResults(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  for (let i=0;i<responseJson.results.length;i++){
    $('#results-list').append(
      `<li class="item">   
      ${renderImage(responseJson.results[i].image.url,responseJson.results[i].name)}
      <ul>
        <li>${responseJson.results[i].biography['full-name']} (${responseJson.results[i].appearance.race})</li>
        <li>Height: ${responseJson.results[i].appearance.height}</li>
        <li>Weight: ${responseJson.results[i].appearance.weight}</li>
      </ul>
      <h4>Power Stats</h4>
      <ul>
        <li>Intelligence: ${responseJson.results[i].powerstats.intelligence}</li>
        <li>Strength: ${responseJson.results[i].powerstats.strength}</li>
        <li>Speed: ${responseJson.results[i].powerstats.speed}</li>
      </ul>
      <ul>  
        <li>Durability: ${responseJson.results[i].powerstats.durability}</li>
        <li>Power: ${responseJson.results[i].powerstats.power}</li>
        <li>Combat: ${responseJson.results[i].powerstats.combat}</li>
      </ul>
      </li>`
    )}; 
  $('#results').removeClass('hidden');
  $('#js-error-message').addClass('hidden')
};

//find character user inputs
function findCharacter(query) {
  var userCharacter = $('input').val();
  fetch('https://www.superheroapi.com/api.php/'+apiKey+'/search/'+userCharacter)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Character Not Found. Try using adding a dash ("-")(i.e. Spider-man).`);
    });
}

// render result images
function renderImage(url,name){
  return `<span>
      <h3 class="toptext" style="
      background: url(${url});">
      ${name}</h3>    
      </span>`
}

// watch form
function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    findCharacter(searchTerm);
  });
}

$(watchForm);
