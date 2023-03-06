import { goOverApps } from "./appIterator.js";
import { mainContainer, proxyUrl, baseURL, appArr, popup, editPopUp } from "./index.js";

export function appendApp(appObj) {
    mainContainer.appendChild(createAppStructure(appObj));
    console.log("Append success");
}

export let optionedApp;
export let optionedAppParentDiv;
export let optionedAppImg;

export function createAppStructure(appObj) {
    let parentDiv = document.createElement('div');
    let iconDiv = document.createElement('div');
    let iconImg = document.createElement('img');
    let nameDiv = document.createElement('div');
    let options = document.createElement('div');

    parentDiv.classList.add("app")
    iconDiv.classList.add("app-logo");
    iconImg.classList.add("actual-logo");
    nameDiv.classList.add("app-name");
    options.classList.add('options-dots');

    parentDiv.appendChild(iconDiv);
    parentDiv.appendChild(options);
    iconDiv.appendChild(iconImg);
    parentDiv.appendChild(nameDiv);

    options.textContent = '...';

    parentDiv.id = `app-${counter}`;
    iconDiv.id = `logo-div-${counter}`;
    iconImg.id = `icon-${counter}`;

    const currentIconDIv = document.getElementById(`logo-div-${counter}`)
    const currentIconSlot = document.getElementById(`icon-${counter}`);

    nameDiv.innerHTML = appObj.name;
    iconImg.src = appObj.icon

    parentDiv.addEventListener('click', () => {
        if ((popup.style.visibility === 'visible') || editPopUp.classList.contains('show')) {
            return;
        }
        window.open(`${appObj.link}`, '_blank');
    })

    options.addEventListener('click', (e)=> {
        e.stopPropagation();
        editPopUp.classList.toggle('show');

        let appName = e.currentTarget.parentNode.querySelector('.app-name').textContent;
        let parentAppDiv = e.currentTarget.parentNode;
        optionedAppParentDiv = parentAppDiv;

        optionedAppImg = parentAppDiv.querySelector('.actual-logo');

        optionedApp = appName;
        goOverApps(e);
        console.log(appName);
    })

    // appArr.push(parentDiv);

    counter++;
    return parentDiv;
}

export let counter = 0;


export class App {

    constructor(appName, appLink, appIconUrl, appId) {
        this.name = appName;
        this.link = appLink;
        this.icon = appIconUrl;
        this.id = appId;
        // ID = this.name
    }

    callName() {
        console.log(this.name);
    }

}


  export function justGetIcon(url) {
    return fetch(proxyUrl + url).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(blob => {
    const faviconUrl = URL.createObjectURL(blob);
    console.log(typeof(faviconUrl));
    return faviconUrl;
  })
  .catch(error => {
    console.error('There was a problem fetching the favicon:', error);
  });
  }
  

