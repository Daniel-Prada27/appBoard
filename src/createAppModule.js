

export function createAppStructure(iterator) {
    let parentDiv = document.createElement('div');
    let iconDiv = document.createElement('div');
    let iconImg = document.createElement('img');
    let nameDiv = document.createElement('div');

    parentDiv.appendChild(iconDiv);
    iconDiv.appendChild(iconImg);
    parentDiv.appendChild(nameDiv);

    parentDiv.id = `app-${iterator}`;

    return parentDiv;
}
