import { optionedApp } from "./createAppModule.js";
import { storedAppArr } from "./index.js";


export let optionedAppIndex;
export let nameField;


export function goOverApps(event) {
    
    nameField = event.currentTarget.parentNode.querySelector('.app-name');

    for (let app in storedAppArr) {
        // console.log(JSON.stringify(storedAppArr[app]));
        
        if (storedAppArr[app].name === optionedApp) {

            console.log(JSON.stringify(storedAppArr[app]));
            optionedAppIndex = app;
            return;
        }

    }
}


