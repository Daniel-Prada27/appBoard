// import {Hey} from './utils.js'

// Hey();
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


