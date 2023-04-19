const boxHome = document.getElementById("grid");
const gridButton = document.getElementById("grid-size");
const boxToChange = document.getElementsByClassName("newbox");
let newDiv;
let boxNumber;
let boxCount = 0;
let totalBoxes;
let boxSize;

function getGrid() {
    boxNumber = prompt("How big a grid?", "Select a number less than 100");
    return boxNumber;
}

gridButton.addEventListener("click", getGrid);

function addBox() {
    newDiv = document.createElement("div");
    const boxHome = document.getElementById("grid");
    newDiv.classList.add("newbox");
    boxHome.appendChild(newDiv);
} 

function changeColor(e) {
    e.target.classList.add("hovereffect");
}

function addHoverClass() {
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].addEventListener("mouseover", changeColor);
    };
}

function getBoxSize(n) {
    let boxDimension = document.getElementById("grid").clientWidth / n;
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].setAttribute("style",`width:${boxDimension}px`,`height:${boxDimension}px`);
    }
}

function displayGrid() {
    let square = boxNumber * boxNumber;
    while (boxCount < square) {
        addBox();
        getBoxSize(boxNumber);
        addHoverClass();
        boxCount++;
    };
}

gridButton.addEventListener("click", displayGrid);



/* function totalBoxGrid() {
    totalBoxes = boxNumber * boxNumber;
    boxSize = (400 / boxNumber);

    while (boxCount < totalBoxes) {
        addBox();
        boxCount++;
    };
    let divToSize = document.getElementsByClassName("newbox");
    for (i = 0; i < divToSize.length; i++) {
        divToSize[i].style.width = `${boxSize}px`;
        divToSize[i].style.height = `${boxSize}px`;
    }
}

let gridButton = document.getElementById("grid-size");
gridButton.addEventListener("click", getGrid);
gridButton.addEventListener("click", totalBoxGrid);

let gridDimension = parseInt(document.getElementById("grid-size").style.width,10);
function setDimension(n) {
    let boxDimension = gridDimension / n;
    console.log(boxDimension);
}

function addMoreBoxes(n) {
    while (boxCount < n) {
        addBox();
        addHoverClass();
        boxCount++;
    };
}

let defaultBoxes = 16;
addMoreBoxes(defaultBoxes);

let gridAnswer;
function changeGrid(e) {
    gridAnswer = prompt("How big should your grid be", "Input a number that is 100 or less");
    addMoreBoxes(gridAnswer);
    addHoverClass();
}

gridButton.addEventListener("click", changeGrid); */