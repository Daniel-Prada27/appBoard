import { createAppStructure } from "./createAppModule";


const body = document.getElementById('body');
const popup = document.getElementById('add-popup');

const form = document.querySelector('.form')

const addBtn = document.getElementById('new-app-btn');


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



console.log(addBtn);

addBtn.addEventListener('click', (e) => {
    e.stopPropagation;
    console.log("Btn prssed");
    console.log(e.target.id);
})

let appArr = [];



addBtn.addEventListener('click', (e) => {
    if (popup.style.visibility === 'visible') {
      body.click();
    } else {
      popup.style.cssText = 'transform: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;';
      body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      form.reset();
      e.stopPropagation();
    }
  })

  form.addEventListener('submit', function (event) {
    // Prevent the form from being submitted
    event.preventDefault();
  }) 

  body.addEventListener('click', () => {
    console.log(popup.style.visibility);
    if (popup.style.visibility === 'visible') {
      popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';
      body.style.backgroundColor = 'rgba(224, 224, 224, 1)';
    }
  })

