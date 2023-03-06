import { optionedApp } from "./createAppModule.js";
import { storedAppArr } from "./index.js";


export let optionedAppIndex;
export let nameField;
export let optionedAppID;


export function goOverApps(event) {
    
    nameField = event.currentTarget.parentNode.querySelector('.app-name');
    optionedAppID = event.currentTarget.parentNode.id;
    console.log(optionedAppID);

    for (let app in storedAppArr) {
        // console.log(JSON.stringify(storedAppArr[app]));
        
        if (storedAppArr[app].id === optionedAppID) {

            console.log(JSON.stringify(storedAppArr[app]));
            optionedAppIndex = app;
            return;
        }

    }
}


