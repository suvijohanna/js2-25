'use strict';

const movies = [];
let more = true;

while (more) {
const title = prompt('Kirjoita elokuvan nimi');
const rating = prompt('Anna elokuvalle arvosana 1-5');
const movie = {title, rating,};
movies.push(movie);
more = confirm('Arvioitko lisää elokuvia?');
}

movies.sort(function(a, b) {
  return b.rating - a.rating;
});

//console.log(movies);

let html = '';
for(let movie of movies) {
  html += `
    <tr>
      <td>${movie.title}</td>
      <td>${movie.rating}</td>
    </tr>
  `;
}

document.querySelector('#target').innerHTML = html;

document.getElementById('fav').innerText = movies[0].title;
