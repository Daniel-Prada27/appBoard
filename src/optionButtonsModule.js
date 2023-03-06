import { changePopup, editPopUp, mainContainer, storedAppArr } from ".";
import { goOverApps, optionedAppIndex } from "./appIterator";
import { optionedAppParentDiv } from "./createAppModule";

export function deleteApp() {

    mainContainer.removeChild(optionedAppParentDiv);
    storedAppArr.splice(optionedAppIndex, 1);
    localStorage.setItem('storedAppArr', JSON.stringify(storedAppArr));

    // indexToRemove = null;
}

export function editName(e) {
    e.stopPropagation();
    editPopUp.classList.toggle('show');
    changePopup.classList.toggle('show');
    // Create a popup to change the App Name, then do the logic storedAppArr[optionedAppIndex].name = bla bla
    // Instant change in DOM

}
