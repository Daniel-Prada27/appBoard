import { appendApp, counter, App, justGetIcon} from "./createAppModule";


const body = document.getElementById('body');
const popup = document.getElementById('add-popup');

const form = document.querySelector('.form')
const inputField = document.querySelectorAll('.input');

export const mainContainer = document.getElementById('main-container');

const addBtn = document.getElementById('new-app-btn');


const appLogo = document .querySelector(".app-logo")


export const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://standardjs.com/index.html#is-there-an-automatic-formatter';
export const baseURL = 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url='
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


  for (let i = 0; i < inputField.length; i++) {
    inputField[i].addEventListener('click', (e) => {
      e.stopPropagation();
    })
  }

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
    event.stopPropagation();
    console.log("Submited");

    const newAppName = appName.value;
    const newAppLink = appLink.value;
    const newAppIconUrl = baseURL + newAppLink;
    
    let newApp = new App(newAppName,newAppLink, newAppIconUrl);
    appendApp(newApp)
    console.log(newApp);
    console.log(newApp.name)
  }) 





  body.addEventListener('click', () => {
    console.log(popup.style.visibility);
    if (popup.style.visibility === 'visible') {
      popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';
      body.style.backgroundColor = 'rgba(224, 224, 224, 1)';
    }
  })


// appendApp(2);
