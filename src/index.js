import { goOverApps } from "./appIterator";
import { appendApp, App} from "./createAppModule";
import { deleteApp } from "./optionButtonsModule";


const body = document.getElementById('body');
export const popup = document.getElementById('add-popup');

const form = document.querySelector('.form')
const inputField = document.querySelectorAll('.input');

export const mainContainer = document.getElementById('main-container');

const addBtn = document.getElementById('new-app-btn');

export const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
export const baseURL = 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url='

export const editPopUp = document.querySelector('.edit-popup');
export const deleteBtn = document.getElementById('delete-btn');


addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Btn prssed");
    console.log(e.target.id);
})

export let appArr = [];

if (localStorage.getItem('storedAppArr') == null) {
    localStorage.setItem('storedAppArr', JSON.stringify(appArr));
}


export let storedAppArr = JSON.parse(localStorage.getItem('storedAppArr')) || [];
console.log(storedAppArr);
console.log("first printed");



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

  popup.addEventListener('click', (e) => {
    e.stopPropagation();
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
    // const newElement =

    appendApp(newApp)
    appArr.push(newApp);
    body.click();
    console.log(newApp);
    console.log(newApp.name)
    console.log(appArr);

    storedAppArr.push(newApp)
    localStorage.setItem('storedAppArr', JSON.stringify(storedAppArr));
    console.log(storedAppArr);
    
  }) 



window.onload = function() {

    const storedArray = JSON.parse(localStorage.getItem('storedAppArr'));
    console.log(storedArray);
    console.log("printed");

    for (let app in storedArray) {
        console.log("here" + JSON.stringify(storedArray[app]));
        appendApp(storedArray[app])

      }
}



  body.addEventListener('click', (e) => {
    console.log(appArr);
    console.log(popup.style.visibility);
    if (popup.style.visibility === 'visible') {
      popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';
      body.style.backgroundColor = 'rgba(224, 224, 224, 1)';
    }

    if (editPopUp.classList.contains('show')) {
        editPopUp.classList.toggle('show');
    }

  })


deleteBtn.addEventListener('click', deleteApp);