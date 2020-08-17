'use strict';

var characters = [] ;
const apiKey = '3108457009190775';

//display characters and information on page
function displayResults(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  for (let i=0;i<responseJson.results.length;i++){
    $('#results-list').append(
      `<li class=item>   
      <img src="${responseJson.results[i].image.url}" class="results-img">     
        <h3>${responseJson.results[i].name}</h3>
        <p>${responseJson.results[i].biography['full-name']}</p>
        <p>${responseJson.results[i].appearance.race}</p>
        <p>${responseJson.results[i].appearance.height}</p>
        <p>${responseJson.results[i].appearance.weight}</p>
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
      $('#js-error-message').text(`Character Not Found. Check the Character Index`);
    });
}

//731 total 
function getCharacters(){
let count = 0;  
while(count<10){
  fetch('https://www.superheroapi.com/api.php/'+apiKey+'/'+count)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => characters.push(responseJson))
    .catch(err => {
      $('#js-error-message').text(`What's happening?`);
    });
  count++
  }
}

// autocomplete character name
$(function() {
  var availableCharacters = [
    "A-Bomb","Abe Sapien","Abin Sur","Abomination","Abraxas","Absorbing Man","Adam Monroe","Adam Strange","Agent 13","Agent Bob","Agent Zero","Air-Walker","Ajax","Alan Scott","Alex Mercer","Alex Woolsly","Alfred Pennyworth","Alien","Allan Quatermain","Amazo","Ammo","Ando Masahashi","Angel","Angel","Angel Dust","Angel Salvadore","Angela","Animal Man","Annihilus","Ant-Man","Ant-Man II","Anti-Monitor","Anti-Spawn","Anti-Venom","Apocalypse","Aquababy","Aqualad","Aquaman","Arachne","Archangel","Arclight","Ardina","Ares","Ariel","Armor","Arsenal","Astro Boy","Atlas","Atlas","Atom","Atom","Atom Girl","Atom II","Atom III","Atom IV","Aurora","Azazel","Azrael","Aztar","Bane","Banshee","Bantam","Batgirl","Batgirl","Batgirl III","Batgirl IV","Batgirl V","Batgirl VI","Batman","Batman","Batman II","Battlestar","Batwoman V","Beak","Beast","Beast Boy","Beetle","Ben 10","Beta Ray Bill","Beyonder","Big Barda","Big Daddy","Big Man","Bill Harken","Billy Kincaid","Binary","Bionic Woman","Bird-Brain","Bird-Man","Bird-Man II","Birdman","Bishop","Bizarro","Black Abbott","Black Adam","Black Bolt","Black Canary","Black Canary","Black Cat","Black Flash","Black Goliath","Black Knight III","Black Lightning","Black Mamba","Black Manta","Black Panther","Black Widow","Black Widow II","Blackout","Blackwing","Blackwulf","Blade","Blaquesmith","Bling!","Blink","Blizzard","Blizzard","Blizzard II","Blob","Bloodaxe","Bloodhawk","Bloodwraith","Blue Beetle","Blue Beetle","Blue Beetle II","Blue Beetle III","Boba Fett","Bolt","Bomb Queen","Boom-Boom","Boomer","Booster Gold","Box","Box III","Box IV","Brainiac","Brainiac 5","Brother Voodoo","Brundlefly","Buffy","Bullseye","Bumblebee","Bumbleboy","Bushido","Cable","Callisto","Cameron Hicks","Cannonball","Captain America","Captain Atom","Captain Britain","Captain Cold","Captain Epic","Captain Hindsight","Captain Mar-vell","Captain Marvel","Captain Marvel","Captain Marvel II","Captain Midnight","Captain Planet","Captain Universe","Carnage","Cat","Cat II","Catwoman","Cecilia Reyes","Century","Cerebra","Chamber","Chameleon","Changeling","Cheetah","Cheetah II","Cheetah III","Chromos","Chuck Norris","Citizen Steel","Claire Bennet","Clea","Cloak","Clock King","Cogliostro","Colin Wagner","Colossal Boy","Colossus","Copycat","Corsair","Cottonmouth","Crimson Crusader","Crimson Dynamo","Crystal","Curse","Cy-Gor","Cyborg","Cyborg Superman","Cyclops","Cypher","Dagger","Danny Cooper","Daphne Powell","Daredevil","Darkhawk","Darkman","Darkseid","Darkside","Darkstar","Darth Maul","Darth Vader","Dash","Data","Dazzler","Deadman","Deadpool","Deadshot","Deathlok","Deathstroke","Demogoblin","Destroyer","Diamondback","DL Hawkins","Doc Samson","Doctor Doom","Doctor Doom II","Doctor Fate","Doctor Octopus","Doctor Strange","Domino","Donatello","Donna Troy","Doomsday","Doppelganger","Dormammu","Dr Manhattan","Drax the Destroyer","Ego","Elastigirl","Electro","Elektra","Elle Bishop","Elongated Man","Emma Frost","Enchantress","Energy","ERG-1","Ethan Hunt","Etrigan","Evil Deadpool","Evilhawk","Exodus","Fabian Cortez","Falcon","Fallen One II","Faora","Feral","Fighting Spirit","Fin Fang Foom","Firebird","Firelord","Firestar","Firestorm","Firestorm","Fixer","Flash","Flash Gordon","Flash II","Flash III","Flash IV","Forge","Franklin Richards","Franklin Storm","Frenzy","Frigga","Galactus","Gambit","Gamora","Garbage Man","Gary Bell","General Zod","Genesis","Ghost Rider","Ghost Rider II","Giant-Man","Giant-Man II","Giganta","Gladiator","Goblin Queen","Godzilla","Gog","Goku","Goliath","Goliath","Goliath","Goliath IV","Gorilla Grodd","Granny Goodness","Gravity","Greedo","Green Arrow","Green Goblin","Green Goblin II","Green Goblin III","Green Goblin IV","Groot","Guardian","Guy Gardner","Hal Jordan","Han Solo","Hancock","Harley Quinn","Harry Potter","Havok","Hawk","Hawkeye","Hawkeye II","Hawkgirl","Hawkman","Hawkwoman","Hawkwoman II","Hawkwoman III","Heat Wave","Hela","Hellboy","Hellcat","Hellstorm","Hercules","Hiro Nakamura","Hit-Girl","Hobgoblin","Hollow","Hope Summers","Howard the Duck","Hulk","Human Torch","Huntress","Husk","Hybrid","Hydro-Man","Hyperion","Iceman","Impulse","Indiana Jones","Indigo","Ink","Invisible Woman","Iron Fist","Iron Man","Iron Monger","Isis","Jack Bauer","Jack of Hearts","Jack-Jack","James Bond","James T. Kirk","Jar Jar Binks","Jason Bourne","Jean Grey","Jean-Luc Picard","Jennifer Kale","Jesse Quick","Jessica Cruz","Jessica Jones","Jessica Sanders","Jigsaw","Jim Powell","JJ Powell","Johann Krauss","John Constantine","John Stewart","John Wraith","Joker","Jolt","Jubilee","Judge Dredd","Juggernaut","Junkpile","Justice","Jyn Erso","K-2SO","Kang","Kathryn Janeway","Katniss Everdeen","Kevin 11","Kick-Ass","Kid Flash","Kid Flash II","Killer Croc","Killer Frost","Kilowog","King Kong","King Shark","Kingpin","Klaw","Kool-Aid Man","Kraven II","Kraven the Hunter","Krypto","Kyle Rayner","Kylo Ren","Lady Bullseye","Lady Deathstrike","Leader","Leech","Legion","Leonardo","Lex Luthor","Light Lass","Lightning Lad","Lightning Lord","Living Brain","Living Tribunal","Liz Sherman","Lizard","Lobo","Loki","Longshot","Luke Cage","Luke Campbell","Luke Skywalker","Luna","Lyja","Mach-IV","Machine Man","Magneto","Magog","Magus","Man of Miracles","Man-Bat","Man-Thing","Man-Wolf","Mandarin","Mantis","Martian Manhunter","Marvel Girl","Master Brood","Master Chief","Match","Matt Parkman","Maverick","Maxima","Maya Herrera","Medusa","Meltdown","Mephisto","Mera","Metallo","Metamorpho","Meteorite","Metron","Micah Sanders","Michelangelo","Micro Lad","Mimic","Minna Murray","Misfit","Miss Martian","Mister Fantastic","Mister Freeze","Mister Knife","Mister Mxyzptlk","Mister Sinister","Mister Zsasz","Mockingbird","MODOK","Mogo","Mohinder Suresh","Moloch","Molten Man","Monarch","Monica Dawson","Moon Knight","Moonstone","Morlun","Morph","Moses Magnum","Mr Immortal","Mr Incredible","Ms Marvel II","Multiple Man","Mysterio","Mystique","Namor","Namor","Namora","Namorita","Naruto Uzumaki","Nathan Petrelli","Nebula","Negasonic Teenage Warhead","Nick Fury","Nightcrawler","Nightwing","Niki Sanders","Nina Theroux","Nite Owl II","Northstar","Nova","Nova","Odin","Offspring","Omega Red","Omniscient","One Punch Man","One-Above-All","Onslaught","Oracle","Osiris","Overtkill","Ozymandias","Parademon","Paul Blart","Penance","Penance I","Penance II","Penguin","Phantom","Phantom Girl","Phoenix","Plantman","Plastic Lad","Plastic Man","Plastique","Poison Ivy","Polaris","Power Girl","Power Man","Predator","Professor X","Professor Zoom","Psylocke","Punisher","Purple Man","Pyro","Q","Quantum","Question","Quicksilver","Quill","Ra's Al Ghul","Rachel Pirzad","Rambo","Raphael","Raven","Ray","Razor-Fist II","Red Arrow","Red Hood","Red Hulk","Red Mist","Red Robin","Red Skull","Red Tornado","Redeemer II","Redeemer III","Renata Soliz","Rey","Rhino","Rick Flag","Riddler","Rip Hunter","Ripcord","Robin","Robin II","Robin III","Robin V","Robin VI","Rocket Raccoon","Rogue","Ronin","Rorschach","Sabretooth","Sage","Sandman","Sasquatch","Sauron","Savage Dragon","Scarecrow","Scarlet Spider","Scarlet Spider II","Scarlet Witch","Scorpia","Scorpion","Sebastian Shaw","Sentry","Shadow King","Shadow Lass","Shadowcat","Shang-Chi","Shatterstar","She-Hulk","She-Thing","Shocker","Shriek","Shrinking Violet","Sif","Silk","Silk Spectre","Silk Spectre II","Silver Surfer","Silverclaw","Simon Baz","Sinestro","Siren","Siren II","Siryn","Skaar","Snake-Eyes","Snowbird","Sobek","Solomon Grundy","Songbird","Space Ghost","Spawn","Spectre","Speedball","Speedy","Speedy","Spider-Carnage","Spider-Girl","Spider-Gwen","Spider-Man","Spider-Man","Spider-Man","Spider-Woman","Spider-Woman II","Spider-Woman III","Spider-Woman IV","Spock","Spyke","Stacy X","Star-Lord","Stardust","Starfire","Stargirl","Static","Steel","Stephanie Powell","Steppenwolf","Storm","Stormtrooper","Sunspot","Superboy","Superboy-Prime","Supergirl","Superman","Swamp Thing","Swarm","Sylar","Synch","T-1000","T-800","T-850","T-X","Taskmaster","Tempest","Thanos","The Cape","The Comedian","Thing","Thor","Thor Girl","Thunderbird","Thunderbird II","Thunderbird III","Thunderstrike","Thundra","Tiger Shark","Tigra","Tinkerer","Titan","Toad","Toxin","Toxin","Tracy Strauss","Trickster","Trigon","Triplicate Girl","Triton","Two-Face","Ultragirl","Ultron","Utgard-Loki","Vagabond","Valerie Hart","Valkyrie","Vanisher","Vegeta","Venom","Venom II","Venom III","Venompool","Vertigo II","Vibe","Vindicator","Vindicator","Violator","Violet Parr","Vision","Vision II","Vixen","Vulcan","Vulture","Walrus","War Machine","Warbird","Warlock","Warp","Warpath","Wasp","Watcher","Weapon XI","White Canary","White Queen","Wildfire","Winter Soldier","Wiz Kid","Wolfsbane","Wolverine","Wonder Girl","Wonder Man","Wonder Woman","Wondra","Wyatt Wingfoot","X-23","X-Man","Yellow Claw","Yellowjacket","Yellowjacket II","Ymir","Yoda","Zatanna","Zoom"
  ];
$("#js-search-term").autocomplete({
  minLength:2,   
  source: availableCharacters
  });
});

//display character index
function showCharacterIndex(){
 $('#characterIndex').click(event => {
  characters.forEach(character => {
    console.log(character.name);
    event.preventDefault();
  })
 });
}

// FIX THIS AND ADD PAGINATION
// function displayCharacters(){
//   $(document).ready(function(){
//   let list = [];
//   for(let i=0;i<characters.length;i++){
//     list +="<li>"+character[i].name+"</li>";
//   }
//   $("#results-list").append(list);
// });
// }

// watch form
function watchForm(){
  getCharacters();
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    findCharacter(searchTerm);
  });
  showCharacterIndex();
}

$(watchForm);