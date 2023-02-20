export function appendApp(container, counter) {
    container.appendChild(createAppStructure(counter));
    console.log("Append success");
}

export function createAppStructure(counter) {
    let parentDiv = document.createElement('div');
    let iconDiv = document.createElement('div');
    let iconImg = document.createElement('img');
    let nameDiv = document.createElement('div');

    parentDiv.classList.add("app")
    iconDiv.classList.add("app-logo");
    iconImg.classList.add("actual-logo");
    nameDiv.classList.add("app-name");

    parentDiv.appendChild(iconDiv);
    iconDiv.appendChild(iconImg);
    parentDiv.appendChild(nameDiv);

    parentDiv.id = `app-${counter}`;

    return parentDiv;
}



