import { optionedApp } from "./createAppModule.js";
import { storedAppArr } from "./index.js";

export function goOverApps(event) {
    
    let nameField = event.currentTarget.parentNode.querySelector('.app-name');

    for (let app in storedAppArr) {
        // console.log(JSON.stringify(storedAppArr[app]));
        
        if (storedAppArr[app].name === optionedApp) {

            // console.log(storedAppArr[app].name);
            storedAppArr[app].name = "savedName";
            nameField.innerHTML = "inmediateChange";
            localStorage.setItem('storedAppArr', JSON.stringify(storedAppArr));


            console.log("bbbb");
        }

    }

}


