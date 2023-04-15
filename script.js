let newDiv;

function addBox() {
    newDiv = document.createElement("div");
    const boxHome = document.getElementById("grid");
    newDiv.classList.add("newbox");
    boxHome.appendChild(newDiv);
}

let boxCount = 0;
let bigBoxDimension = 400;
let oneSide;
let boxSize;

function setDimension() {
    oneSide = boxCount / 4;
    boxSize = bigBoxDimension / oneSide;
    boxToChange.style.height = `${boxSize}px`;
    boxToChange.style.width = `${boxSize}px`;
}

function addMoreBoxes(n) {
    while (boxCount < n) {
        addBox();
        setDimension();
        boxCount++;
    }
}

let defaultBoxes = 16;
addMoreBoxes(defaultBoxes);

let boxToChange = document.getElementsByClassName("newbox");
function changeColor(e) {
    e.target.classList.add("hovereffect");
}

function addHoverClass() {
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].addEventListener("mouseover", changeColor);
    };
}

let gridButton = document.getElementById("grid-size");

let gridAnswer;
function changeGrid() {
    gridAnswer = prompt("How big should your grid be", "Input a number that is 100 or less");
    addMoreBoxes(gridAnswer);
    addHoverClass();
}

gridButton.addEventListener("click", changeGrid);

