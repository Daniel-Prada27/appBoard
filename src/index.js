
const appLogo = document .querySelector(".app-logo")
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://www.google.com/favicon.ico';
fetch(proxyUrl + url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(blob => {
    const faviconUrl = URL.createObjectURL(blob);
    const img = document.querySelector('.actual-logo');
    img.src = faviconUrl;
    appLogo.appendChild(img);
  })
  .catch(error => {
    console.error('There was a problem fetching the favicon:', error);
  });


const addBtn = document.getElementById('new-app-btn');


addBtn.addEventListener('click', (e) => {
    e.stopPropagation;
    console.log("Btn prssed");
    console.log(e.target.id);
})

let appArr = [];

function createAppStructure(iterator) {
    let parentDiv = document.createElement('div');
    let iconDiv = document.createElement('div');
    let iconImg = document.createElement('img');
    let nameDiv = document.createElement('div');

    parentDiv.appendChild(iconDiv);
    iconDiv.appendChild(iconImg);
    parentDiv.appendChild(nameDiv);

    parentDiv.id = `app-${iterator}`;

    return parentDiv;
}




