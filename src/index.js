import { nameField, optionedAppIndex } from "./appIterator";
import { appendApp, App, optionedAppImg} from "./createAppModule";
import { deleteApp, editName } from "./optionButtonsModule";
// import './style.css';


const body = document.getElementById('body');
export const popup = document.getElementById('add-popup');
export const changePopup = document.getElementById('change-popup');

const addForm = document.querySelector('.form')
export const changeForm = document.getElementById('changeForm');
const inputField = document.querySelectorAll('.input');

export const mainContainer = document.getElementById('main-container');

const addBtn = document.getElementById('new-app-btn');

export const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
export const baseURL = 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url='

export const editPopUp = document.querySelector('.edit-popup');
export const changeBtn = document.getElementById('change-name-btn');
export const deleteBtn = document.getElementById('delete-btn');

export const editAppLink = document.getElementById('editAppLink');
export const editAppName = document.getElementById('editAppName');


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
      popup.style.cssText = 'transaddForm: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;';
      body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      addForm.reset();
      e.stopPropagation();
    }
  })

  popup.addEventListener('click', (e) => {
    e.stopPropagation();
  })

  changePopup.addEventListener('click', (e) => {
    e.stopPropagation();
  })

  addForm.addEventListener('submit', function (event) {
    // Prevent the addForm from being submitted
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
      popup.style.cssText = 'transaddForm: translate(-50%, -50%) scale(0.1); visibility: hidden;';
      body.style.backgroundColor = 'rgba(224, 224, 224, 1)';
    }
    if (editPopUp.classList.contains('show')) {
        editPopUp.classList.toggle('show');
    }

    if (changePopup.classList.contains('show')) {
        changePopup.classList.toggle('show');
    }

  })

changeBtn.addEventListener('click', editName);
deleteBtn.addEventListener('click', deleteApp);


changeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Submited");

    const newAppName = editAppName.value;
    const newAppLink = editAppLink.value;
    const newAppIconUrl = baseURL + newAppLink;

    if (newAppName !== '') {
        optionedStoredApp.name = newAppName;
        nameField.innerHTML = newAppName;
    }



    console.log(newAppLink === '');

    if (newAppLink !== '') {
        optionedStoredApp.link = newAppLink;
        optionedStoredApp.icon = newAppIconUrl;
        optionedAppImg.src = newAppIconUrl;
    }

    body.click();

    localStorage.setItem('storedAppArr', JSON.stringify(storedAppArr));
    console.log(storedAppArr);

});