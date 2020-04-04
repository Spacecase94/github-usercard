/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const followersArray = [
  'Spacecase94',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

function getData() {
  const cards = document.querySelector('.cards');
  for (let i = 0; i < followersArray.length; i++) {
    axios
        .get(`https://api.github.com/users/${followersArray[i]}`)
        .then(res => {
          cards.appendChild(cardComponent(res.data));
        })
        .catch(err => console.error(err));
  }
}

const cardComponent = (obj) => {


  // create card container div
  const card = document.createElement('div');
  card.classList = 'card';

  // create img tag and set avatar image url
  const avatar = document.createElement('img');
  avatar.src = `${obj.avatar_url}`;
  card.appendChild(avatar);

  // create card info div
  const cardInfo = document.createElement('div');
  cardInfo.classList = 'card-info';
  card.appendChild(cardInfo);

  // create name heading element
  const name = document.createElement('h3');
  name.classList = 'name';
  card.appendChild(name);

  // create username element
  const userName = document.createElement('p');
  userName.classList = 'username';
  card.appendChild(userName);

  // create location element
  const location = document.createElement('p');
  location.textContent =`Location: ${obj.location}`;
  card.appendChild(location);

  // create profile element with link to users github page
  const profile = document.createElement('p');
  profile.textContent = `Profile:`;
  card.appendChild(profile);

  const profileLink = document.createElement('a');
  profileLink.textContent = ` ${obj.name}`
  profileLink.href = `${obj.html_url}`;
  profile.appendChild(profileLink);

  // create followers element with followers count
  const followers = document.createElement('p');
  followers.textContent = `Followers: ${obj.followers}`;
  card.appendChild(followers);

  // create following element with following count
  const following = document.createElement('p');
  following.textContent = `Following: ${obj.following}`;
  card.appendChild(following);

  // create bio element
  const bio = document.createElement('p');
  bio.textContent = `Bio: ${obj.bio}`;
  card.appendChild(bio);

  return card;
};

getData();


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
