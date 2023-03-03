import { mainContainer, proxyUrl, baseURL, appArr } from "./index.js";

export function appendApp(appObj) {
    mainContainer.appendChild(createAppStructure(appObj));
    console.log("Append success");
}

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
    // iconImg.alt = appObj.name[0];
    // parentDiv.dataset.link = appObj.link;
    // getIcon(appObj.appLink, currentIconDIv, currentIconSlot);

    parentDiv.addEventListener('click', () => {
        window.open(`${appObj.link}`, '_blank');
    })

    // options.addEventListener('click', (e)=>)

    // appArr.push(parentDiv);

    counter++;
    return parentDiv;
}

export let counter = 0;

// export function storeDiv(div, divname) {
//     localStorage.setItem(`${divname}`, ) // DO THIS GOOD
// }

export class App {

    constructor(appName, appLink, appIconUrl) {
        this.name = appName;
        this.link = appLink;
        this.icon = appIconUrl;
        // ID = this.name
    }

    callName() {
        console.log(this.name);
    }

}


  export function getIcon(url, iconDIv, iconSlot) {
    fetch(proxyUrl + url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(blob => {
    const faviconUrl = URL.createObjectURL(blob);
    // const img = document.querySelector('.actual-logo');
    iconSlot.src = faviconUrl;
    iconDIv.appendChild(iconSlot);
  })
  .catch(error => {
    console.error('There was a problem fetching the favicon:', error);
  });
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
  

