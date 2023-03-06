import { mainContainer, storedAppArr } from ".";
import { goOverApps, indexToRemove } from "./appIterator";
import { optionedAppParentDiv } from "./createAppModule";

export function deleteApp() {

    mainContainer.removeChild(optionedAppParentDiv);
    storedAppArr.splice(indexToRemove, 1);
    localStorage.setItem('storedAppArr', JSON.stringify(storedAppArr));

    // indexToRemove = null;
}
